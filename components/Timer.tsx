/**
 * @file The main component on which the application is executed. Almost most of the 
 *  operations are done here, the pomodoro application is offered to the user from here.
 * @author Berk selvi
 * @license Apache-2.0
 */
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { connect } from "react-redux";
import {
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCurrentPeriod,
  setCurrentStatus,
  setTimerKey,
  setCurrentActivity
} from "../redux";
import TimerButton from "./shared/TimerButton";
import useColorScheme from '../hooks/useColorScheme';
import { START, PAUSE, CANCEL, RESUME, DISABLE } from "../constants/ButtonTypes";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import { lightThemeColors, darkThemeColors } from "../constants/Colors";
import useNotification from "../hooks/useNotification";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import I18n from "../localization/_i18n";

const Counter = ({
  // functions
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCurrentPeriod,
  setCurrentStatus,
  setTimerKey,
  setCurrentActivity,
  // states
  workDB,
  durationWork,
  durationShortBreak,
  durationLongBreak,
  formatTime,
  formatTarget,
  currentPeriod,
  currentStatus,
  currentActivity,
  timerKey,
  goalDaily,
  goalLittle,
}: any ) => {
  const theme = useColorScheme();
  const sendNotification = useNotification({ delayTime:parseInt(currentPeriod) ,notificationType:currentStatus });
  const [themeColor, setThemeColor] = useState((theme === "light") ? lightThemeColors : darkThemeColors);
  const [buttonCondition_Right, setButtonCondition_Right] = useState(START);
  const [buttonCondition_Left, setButtonCondition_Left] = useState(DISABLE);
  const [counterColor, setCounterColor] = useState(themeColor.TIMER_WORK);
  
  /**
   * Operations are decided by taking parameters from the timer buttons of the timer. 
   * For instance, if the switch enters CANCEL, the CANCEL button has been pressed.
   * @param {string} currentCondition 
   */
  const buttonPressHandler = (currentCondition: string) => {
    switch (currentCondition) {
      case CANCEL:
        setTimerKey(timerKey + 1);
        setCurrentActivity(false);
        setButtonCondition_Right(START);
        setButtonCondition_Left(DISABLE);
        break;
      case START:
        // Send schedule notification when START button is pressed.
        if (currentPeriod != 0) {
          sendNotification();
        }
        setCurrentActivity(true);
        setButtonCondition_Right(PAUSE);
        setButtonCondition_Left(CANCEL);
        break;
      case RESUME:
        setCurrentActivity(true);
        setButtonCondition_Right(PAUSE);
        break;
      case PAUSE:
        setCurrentActivity(false);
        setButtonCondition_Right(RESUME);
      default:
        break;
    }
  };

  /**
   * This function works when the counter is completed. Calling from inside the counter component.
   */
  const counterCompleted = () => {
    if (currentPeriod == durationWork && ((workDB.length + 1) % goalLittle != 0 || workDB.length == 0)) {
      // WORK is done. SHORT_BREAK queued.
      completedWork(currentPeriod);
      setCurrentStatus(pomodoroTypes.SHORT_BREAK);
      setCurrentPeriod(durationShortBreak);
      setCounterColor(themeColor.SHORT_BREAK);
    } else if (currentPeriod == durationWork && (workDB.length + 1) % goalLittle == 0 && workDB.length != 0) {
      // WORK is done. LONG_BREAK queued.
      completedWork(currentPeriod);
      setCurrentStatus(pomodoroTypes.LONG_BREAK);
      setCurrentPeriod(durationLongBreak);
      setCounterColor(themeColor.LONG_BREAK);
    } else if (currentPeriod == durationShortBreak) {
      // SHORT_BREAK is done. WORK queued.
      completedShortBreak();
      setCurrentStatus(pomodoroTypes.WORK);
      setCurrentPeriod(durationWork);
      setCounterColor(themeColor.TIMER_WORK);
    } else if (currentPeriod == durationLongBreak) {
      // LONG_BREAK is done. WORK queued.
      completedLongBreak();
      setCurrentStatus(pomodoroTypes.WORK);
      setCurrentPeriod(durationWork);
      setCounterColor(themeColor.TIMER_WORK);
    } else {
      // Any errors are reported.
      console.error("An error occur when counter completed");
      setCounterColor(themeColor.ERROR);
    }

    setTimerKey(timerKey + 1);
    setCurrentActivity(false);
    // We are making the button on the right START.
    setButtonCondition_Right(START);
    // We are making the button on the left DISABLE.
    setButtonCondition_Left(DISABLE);
  };

  /**
   * Format the time that appears in the counter. We call it in the CountdownCircleTimer.
   * @param {any} remainingTime 
   */
  const countdownTimeFormater = (remainingTime: any) => {
    let minutes = Math.floor(remainingTime / 60).toString();
    let seconds = (remainingTime % 60).toString();

    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  /**
   * Format the card that indicates the working time in today on the screen.
   */
  const screenTimeFormater = () => {
    let totalMinute = 0;

    workDB.forEach(( item:any ) => {
      if( item.date.toDateString() == new Date().toDateString() )
      {
        totalMinute += item.time;
      }
    });

    let hour = Math.floor(totalMinute / 3600).toString();
    let minute = (totalMinute / 60).toString();

    // The formatTime variable comes from the userInterface reducer. It is updated by clicking on the card.
    if (formatTime == 0) {
      if (hour == "0") {
        if (minute == "0") {
          return I18n.t("work_please");  
        }else{
          return `${minute} ${I18n.t("minutes")}`;
        }
      } else {
        return `${hour} ${I18n.t("hours")} ${minute} ${I18n.t("minutes")}`;
      }
    } else {
      return `${minute} ${I18n.t("minutes")}`;
    }
  };

  /**
   * We format the card on the screen, indicating the goal that is done and will be done today.
   */
  const screenTargetFormater = () => {
    // The formatTarget variable comes from the userInterface reducer. It is updated by clicking on the card.
    let completedWork = 0;

    workDB.forEach(( item:any ) => {
      if( item.date.toDateString() == new Date().toDateString() )
      {
        completedWork += 1;
      }
    });

    if (formatTarget == 0) {
      return `${completedWork} / ${goalDaily}`;
    } else {
      return completedWork;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying={currentActivity}
          duration={currentPeriod}
          size={responsiveScreenWidth(75)} // 270  | pixel 7 & pixel 10 responsiveScreenFontSize(30) | 
          key={timerKey}
          colors={counterColor}
          onComplete={() => {
            counterCompleted();
            return [false, 5];
          }}
        >
          {({ remainingTime }) => (
            <View style={styles.countdownTextContainer}>
              <Text style={[styles.countdownText, { color: themeColor.SECONDARY }]}>
                {countdownTimeFormater(remainingTime)}
              </Text>
            </View>
          )}
        </CountdownCircleTimer>

        <View style={styles.controllers}>
          <TimerButton condition={buttonCondition_Left} buttonPressHandler={buttonPressHandler} />
          <TimerButton condition={buttonCondition_Right} buttonPressHandler={buttonPressHandler} />
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card, { borderColor: themeColor.CARD_OUT, backgroundColor: themeColor.CARD_IN }]}
            onPress={() => {
              formatTime == 0 ? setFormatTime(1) : setFormatTime(0);
            }}
          >
            <Text style={[styles.cardText, { color: themeColor.CARD_TEXT }]}>{screenTimeFormater()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card, { borderColor: themeColor.CARD_OUT, backgroundColor: themeColor.CARD_IN }]}
            onPress={() => {
              formatTarget == 0 ? setFormatTarget(1) : setFormatTarget(0);
            }}
          >
            <Text style={[styles.cardText, { color: themeColor.CARD_TEXT }]}>{screenTargetFormater()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    workDB: state.archive.workDB,
    shortBreakDB: state.archive.shortBreakDB,
    longBreakDB: state.archive.longBreakDB,

    durationWork: state.timerSettings.durationWork,
    durationShortBreak: state.timerSettings.durationShortBreak,
    durationLongBreak: state.timerSettings.durationLongBreak,

    formatTime: state.userInterface.formatTime,
    formatTarget: state.userInterface.formatTarget,

    currentPeriod: state.timer.currentPeriod,
    currentStatus: state.timer.currentStatus,
    currentActivity: state.timer.currentActivity,
    timerKey: state.timer.timerKey,

    goalDaily: state.goal.goalDaily,
    goalLittle: state.goal.goalLittle,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    completedWork: (time: number) => dispatch(completedWork(time)),
    completedShortBreak: () => dispatch(completedShortBreak()),
    completedLongBreak: () => dispatch(completedLongBreak()),

    setFormatTime: (formatTime: any) => dispatch(setFormatTime(formatTime)),
    setFormatTarget: (formatTarget: any) => dispatch(setFormatTarget(formatTarget)),

    setCurrentPeriod: (duration: any) => dispatch(setCurrentPeriod(duration)),
    setCurrentStatus: (statusCode: any) => dispatch(setCurrentStatus(statusCode)),
    setTimerKey: (currentKey: any) => dispatch(setTimerKey(currentKey)),
    setCurrentActivity: (activity: boolean) => dispatch(setCurrentActivity(activity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownContainer: {
    position: "absolute",
    top: responsiveScreenFontSize(2), // 10
  },
  countdownTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownText: {
    fontSize: responsiveScreenFontSize(6), // 45
  },
  controllers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(4) // 30
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: responsiveScreenWidth(0.5), // 2
    borderRadius: responsiveScreenWidth(5), // 20
    width: "100%",
    paddingVertical: responsiveScreenHeight(1.8), // 15
    paddingHorizontal: responsiveScreenWidth(1.8), // 15
    marginVertical: responsiveScreenHeight(1.2), // 10
  },
  cardText: {
    fontSize: responsiveScreenFontSize(2.4), // 20
  },
});
