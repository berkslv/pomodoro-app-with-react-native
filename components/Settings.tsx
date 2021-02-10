/**
 * @file Timer settings are handled here.
 * @author Berk selvi
 * @license Apache-2.0
 */
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {
  setDurationWork,
  setDurationShortBreak,
  setDurationLongBreak,
  setGoalDaily,
  setGoalLittle,
  setTimerKey,
  setCurrentActivity,
  setCurrentPeriod,
} from "../redux";
import { connect } from "react-redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import AboutUs from "./shared/AboutUs";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import I18n from "../localization/_i18n";
import useColorScheme from '../hooks/useColorScheme';
import { lightThemeColors, darkThemeColors } from "../constants/Colors";

const Settings = ({
  // states
  durationWork,
  durationShortBreak,
  durationLongBreak,
  goalDaily,
  goalLittle,
  timerKey,
  currentStatus,
  // functions
  setDurationWork,
  setDurationShortBreak,
  setDurationLongBreak,
  setGoalDaily,
  setGoalLittle,
  setTimerKey,
  setCurrentPeriod,
  setCurrentActivity,
}: any) => {
  const theme = useColorScheme();
  const [themeColor, setThemeColor] = useState((theme === "light") ? lightThemeColors : darkThemeColors);

  const workTimeRef: any = useRef(null);
  const shortBreakRef: any = useRef(null);
  const longBreakRef: any = useRef(null);

  const goalLittleRef: any = useRef(null);
  const goalDailyRef: any = useRef(null);

  const focusEvent = (ref: any) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const resetTimer = () => {
    setTimerKey(timerKey);
    setCurrentActivity(false);
  };

  const regControl = (val:any) => {
    // Regex for only numbers and empty string
    let reg = /^(\s*|\d+)$/;
    return reg.exec(val);
  }

  const workTime_changeHandler = (value: any) => {
    resetTimer();

    if (regControl(value)) {

      if (value != "") {
        value = value * 60;
        setDurationWork(parseInt(value));
        if (currentStatus == pomodoroTypes.WORK) {
          setCurrentPeriod(parseInt(value));
        }
      } else {
        setDurationWork(value);
        if (currentStatus == pomodoroTypes.WORK) {
          setCurrentPeriod(value);
        }
      }

    }
  };

  const shortBreak_changeHandler = (value: any) => {
    resetTimer();

    if (regControl(value)) {
      
      if (value != "") {
        value = value * 60;
        setDurationShortBreak(parseInt(value));
        if (currentStatus == pomodoroTypes.SHORT_BREAK) {
          setCurrentPeriod(parseInt(value));
        }
      } else {
        setDurationShortBreak(value);
        if (currentStatus == pomodoroTypes.SHORT_BREAK) {
          setCurrentPeriod(value);
        }
      }

    }
  };

  const longBreak_changeHandler = (value: any) => {
    resetTimer();

    if (regControl(value)) {
      
      if (value != "") {
        value = value * 60;
        setDurationLongBreak(parseInt(value));
        if (currentStatus == pomodoroTypes.LONG_BREAK) {
          setCurrentPeriod(parseInt(value));
        }
      } else {
        setDurationLongBreak(value);
        if (currentStatus == pomodoroTypes.LONG_BREAK) {
          setCurrentPeriod(value);
        }
      }

    }
  };

  const littleGoal_changeHandler = (value:any) => {
    
    if (regControl(value)) {

      setGoalLittle(value);

    }

  }

  const dailyGoal_changeHandler = (value:any) => {

    if (regControl(value)) {

      setGoalDaily(value);

    }

  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.inputParentContainer,{backgroundColor:themeColor.SETTINGS_BACKGROUND}]}> 
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(workTimeRef);
          }}
          style={[styles.inputContainer,{borderBottomColor:themeColor.SETTINGS_BORDER}]}
        >
          <Text style={[styles.inputText,{color: themeColor.SETTINGS_INPUT_TEXT}]}>{I18n.t("work_time")}</Text>
          <TextInput
            ref={workTimeRef}
            style={[styles.input,{color: themeColor.SETTINGS_INPUT}]}
            placeholder={I18n.t("work_time")}
            value={(durationWork / 60).toString()}
            onChangeText={(e) => {
              workTime_changeHandler(e);
            }}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(shortBreakRef);
          }}
          style={[styles.inputContainer,{borderBottomColor:themeColor.SETTINGS_BORDER}]}
        >
          <Text style={[styles.inputText,{color: themeColor.SETTINGS_INPUT_TEXT}]}>{I18n.t("short_break")}</Text>
          <TextInput
            ref={shortBreakRef}
            style={[styles.input,{color: themeColor.SETTINGS_INPUT}]}
            placeholder={I18n.t("short_break")}
            onChangeText={(e) => {
              shortBreak_changeHandler(e);
            }}
            value={(durationShortBreak / 60).toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(longBreakRef);
          }}
          style={styles.inputLastContainer}
        >
          <Text style={[styles.inputText,{color: themeColor.SETTINGS_INPUT_TEXT}]}>{I18n.t("long_break")}</Text>
          <TextInput
            ref={longBreakRef}
            style={[styles.input,{color: themeColor.SETTINGS_INPUT}]}
            placeholder={I18n.t("long_break")}
            onChangeText={(e) => {
              longBreak_changeHandler(e);
            }}
            value={(durationLongBreak / 60).toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={[styles.inputParentContainer,{backgroundColor:themeColor.SETTINGS_BACKGROUND}]}>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(workTimeRef);
          }}
          style={[styles.inputContainer,{borderBottomColor:themeColor.SETTINGS_BORDER}]}
        >
          <Text style={[styles.inputText,{color: themeColor.SETTINGS_INPUT_TEXT}]}>{I18n.t("little_goal")}</Text>
          <TextInput
            ref={goalLittleRef}
            style={[styles.input,{color: themeColor.SETTINGS_INPUT}]}
            placeholder={I18n.t("little_goal")}
            value={goalLittle.toString()}
            onChangeText={(e) => {
              littleGoal_changeHandler(e)
            }}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(shortBreakRef);
          }}
          style={styles.inputLastContainer}
        >
          <Text style={[styles.inputText,{color: themeColor.SETTINGS_INPUT_TEXT}]}>{I18n.t("daily_gaol")}</Text>
          <TextInput
            ref={goalDailyRef}
            style={[styles.input,{color: themeColor.SETTINGS_INPUT}]}
            placeholder={I18n.t("daily_gaol")}
            onChangeText={(e) => {
              dailyGoal_changeHandler(e);
            }}
            value={goalDaily.toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
      </View>

      <AboutUs />
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    durationWork: state.timerSettings.durationWork,
    durationShortBreak: state.timerSettings.durationShortBreak,
    durationLongBreak: state.timerSettings.durationLongBreak,

    goalDaily: state.goal.goalDaily,
    goalLittle: state.goal.goalLittle,

    timerKey: state.timer.timerKey,
    currentStatus: state.timer.currentStatus,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDurationWork: (durationWork: any) =>
      dispatch(setDurationWork(durationWork)),
    setDurationShortBreak: (durationShortBreak: any) =>
      dispatch(setDurationShortBreak(durationShortBreak)),
    setDurationLongBreak: (durationLongBreak: any) =>
      dispatch(setDurationLongBreak(durationLongBreak)),

    setGoalDaily: (goalDaily: any) => dispatch(setGoalDaily(goalDaily)),
    setGoalLittle: (goalLittle: any) => dispatch(setGoalLittle(goalLittle)),

    setTimerKey: (currentKey: any) => dispatch(setTimerKey(currentKey)),
    setCurrentPeriod: (period: any) => dispatch(setCurrentPeriod(period)),
    setCurrentActivity: (activity: boolean) =>
      dispatch(setCurrentActivity(activity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  inputParentContainer: {
    paddingVertical: responsiveScreenHeight(0.8), // 5
    paddingHorizontal: responsiveScreenWidth(5), // 20
    flexDirection: "column",
    marginTop: responsiveScreenHeight(4), // 30
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  inputLastContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: responsiveScreenHeight(1.2), // 10
    paddingHorizontal: responsiveScreenWidth(2.5), // 10
    fontSize: responsiveScreenFontSize(2.5), // 20
    textAlign:"right",
  },
  inputText: {
    flex: 1,
    fontSize: responsiveScreenFontSize(2.33), // 18
  },
});
