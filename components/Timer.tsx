import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { connect } from "react-redux";
import {
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCounterDuration,
  setCounterStatus,
  setTimerKey,
} from "../redux";
import Circle from "./shared/Circle";
import useColorScheme from '../hooks/useColorScheme';
import { START, PAUSE, CANCEL, RESUME, DISABLE } from "../constants/ButtonTypes";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import { lightThemeColors, darkThemeColors } from "../constants/Colors";


const Counter = ({
  // functions
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCounterDuration,
  setCounterStatus,
  setTimerKey,
  // states
  workDB,
  durationWork,
  durationShortBreak,
  durationLongBreak,
  formatTime,
  formatTarget,
  currentPeriod,
  timerKey,
  dailyGoal,
  littleGoal,
} 
: 
{
    // functions
  completedWork : any,
  completedShortBreak : any,
  completedLongBreak : any,
  setFormatTime : any,
  setFormatTarget : any,
  setCounterDuration : any,
  setCounterStatus : any,
  setTimerKey : any,
  // states
  workDB : any,
  durationWork : any,
  durationShortBreak : any,
  durationLongBreak : any,
  formatTime : any,
  formatTarget : any,
  currentPeriod : any,
  timerKey : any,
  dailyGoal : any,
  littleGoal : any,
}) => {
  const theme = useColorScheme();
  const [themeColor, setThemeColor] = useState((theme==="light")?lightThemeColors:darkThemeColors);
  const [buttonCondition_Right, setButtonCondition_Right] = useState(START);
  const [buttonCondition_Left, setButtonCondition_Left] = useState(DISABLE);
  const [counterActive, setCounterActive] = useState(false);
  const [counterColor, setCounterColor] = useState(themeColor.TIMER_WORK);

  const buttonPressHandler = (currentCondition : string) => {
    switch (currentCondition) {
      case CANCEL:
        setTimerKey(timerKey + 1);
        setCounterActive(false);
        setButtonCondition_Right(START);
        setButtonCondition_Left(DISABLE);
        break;
      case START:
        setCounterActive(true);
        setButtonCondition_Right(PAUSE);
        setButtonCondition_Left(CANCEL);
        break;
      case RESUME:
        setCounterActive(true);
        setButtonCondition_Right(PAUSE);
        break;
      case PAUSE:
        setCounterActive(false);
        setButtonCondition_Right(RESUME);
      default:
        break;
    }
  };

  const counterCompleted = () => {
    if ( currentPeriod == durationWork  && ( workDB.length % littleGoal != 0 || workDB.length == 0)  ) {
      // work X shortBreak Y
      completedWork();

      setCounterColor(themeColor.SHORT_BREAK);
      setCounterDuration(durationShortBreak);
      setCounterStatus(pomodoroTypes.SHORT_BREAK);
    } else if ( currentPeriod == durationWork  && workDB.length % littleGoal == 0 && workDB.length != 0 ) {
      // work X longBreak Y
      completedWork();

      setCounterColor(themeColor.LONG_BREAK);
      setCounterDuration(durationLongBreak);
      setCounterStatus(3);
    } else if (currentPeriod == durationShortBreak) {
      // shortBreak X work Y
      completedShortBreak();

      setCounterColor(themeColor.TIMER_WORK);
      setCounterDuration(durationWork);
      setCounterStatus(pomodoroTypes.WORK);
    } else if (currentPeriod == durationLongBreak) {
      // longBreak X work Y
      completedLongBreak();

      setCounterColor(themeColor.TIMER_WORK);
      setCounterStatus(pomodoroTypes.WORK);
    }else {
      console.error("An error occur when counter completed");
      setCounterColor(themeColor.ERROR);
    }

    setTimerKey(timerKey + 1);
    setCounterActive(false);
    setButtonCondition_Right(START);
    setButtonCondition_Left(DISABLE);
  };

  const countdownTimeFormater = (remainingTime : any) => {
    let minutes = Math.floor(remainingTime / 60).toString();
    let seconds = (remainingTime % 60).toString();

    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  const screenTimeFormater = () => {
    let totalMinute = workDB.length * 25; 

    let hour = Math.floor(totalMinute / 60).toString();
    let minute = (totalMinute % 60).toString();

    if (formatTime == 0) {
      if (hour == "0") {
        return minute + " minutes";
      } else {
        return hour + " hours " + minute + " minutes";
      }
    } else {
      return Math.floor(totalMinute) + " minutes";
    }
  };

  const screenTargetFormater = () => {
    if (formatTarget == 0) {
      return workDB.length + ` / ${dailyGoal}`;
    } else {
      return workDB.length;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying={counterActive}
          duration={currentPeriod}
          size={270}
          key={timerKey}
          colors={counterColor}
          onComplete={() => {
            counterCompleted();
            return [false, 5];
          }}
        >
          {({ remainingTime }) => (
            <View style={styles.countdownTextContainer}>
              <Text style={[styles.countdownText,{color: themeColor.SECONDARY}]}>
                {countdownTimeFormater(remainingTime)}
              </Text>
            </View>
          )}
        </CountdownCircleTimer>

        <View style={styles.controllers}>
          <Circle condition={buttonCondition_Left} buttonPressHandler={buttonPressHandler} />
          <Circle condition={buttonCondition_Right} buttonPressHandler={buttonPressHandler} />
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card,{borderColor:themeColor.CARD_OUT,backgroundColor:themeColor.CARD_IN}]}
            onPress={() => {
              formatTime == 0 ? setFormatTime(1) : setFormatTime(0);
            }}
          >
            <Text style={[styles.cardText,{color:themeColor.CARD_TEXT}]}>{screenTimeFormater()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card,{borderColor:themeColor.CARD_OUT,backgroundColor:themeColor.CARD_IN}]}
            onPress={() => {
              formatTarget == 0 ? setFormatTarget(1) : setFormatTarget(0);
            }}
          >
            <Text style={[styles.cardText,{color:themeColor.CARD_TEXT}]}>{screenTargetFormater()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state : any) => {
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
    timerKey: state.timer.timerKey,

    dailyGoal: state.goal.dailyGoal,
    littleGoal: state.goal.littleGoal,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    completedWork: () => dispatch(completedWork()),
    completedShortBreak: () => dispatch(completedShortBreak()),
    completedLongBreak: () => dispatch(completedLongBreak()),

    setFormatTime: (formatTime : any) => dispatch(setFormatTime(formatTime)),
    setFormatTarget: (formatTarget : any) => dispatch(setFormatTarget(formatTarget)),

    setCounterDuration: (duration : any) => dispatch(setCounterDuration(duration)),
    setCounterStatus: (statusCode : any) => dispatch(setCounterStatus(statusCode)),
    setTimerKey: (currentKey : any) => dispatch(setTimerKey(currentKey)),
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
    top: 30,
  },
  countdownTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownText: {
    fontSize: 45,
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
    marginTop: 30,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 20,
  },
});
