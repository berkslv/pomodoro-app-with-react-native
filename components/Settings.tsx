import React, { useRef } from "react";
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
import { Formik } from "formik"; // DO npm uninstall formik
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import AboutUs from "./shared/AboutUs";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";


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

  const workTime_changeHandler = (value: any) => {
    resetTimer();

    if (value != "") {
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
  };

  const shortBreak_changeHandler = (value: any) => {
    resetTimer();

    if (value != "") {
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
  };

  const longBreak_changeHandler = (value: any) => {
    resetTimer();

    if (value != "") {
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
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inputParentContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(workTimeRef);
          }}
          style={styles.inputContainer}
        >
          <Text style={styles.inputText}>Work time</Text>
          <TextInput
            ref={workTimeRef}
            style={styles.input}
            placeholder="Work time"
            value={durationWork.toString()}
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
          style={styles.inputContainer}
        >
          <Text style={styles.inputText}>Short break</Text>
          <TextInput
            ref={shortBreakRef}
            style={styles.input}
            placeholder="Short break"
            onChangeText={(e) => {
              shortBreak_changeHandler(e);
            }}
            value={durationShortBreak.toString()}
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
          <Text style={styles.inputText}>Long break</Text>
          <TextInput
            ref={longBreakRef}
            style={styles.input}
            placeholder="Long break"
            onChangeText={(e) => {
              longBreak_changeHandler(e);
            }}
            value={durationLongBreak.toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.inputParentContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            focusEvent(workTimeRef);
          }}
          style={styles.inputContainer}
        >
          <Text style={styles.inputText}>Little goal</Text>
          <TextInput
            ref={goalLittleRef}
            style={styles.input}
            placeholder="Little goal"
            value={goalLittle.toString()}
            onChangeText={(e) => {
              setGoalLittle(e);
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
          <Text style={styles.inputText}>Daily goal</Text>
          <TextInput
            ref={goalDailyRef}
            style={styles.input}
            placeholder="Daily goal"
            onChangeText={(e) => {
              setGoalDaily(e);
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

// redux için state değişkenlerini map ediyoruz.
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

// redux için fonksiyonları map ediyoruz.
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

// redux bağlantısı kuruyoruz.
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  inputParentContainer: {
    backgroundColor: "#141414",
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
    borderBottomColor: "#363636",
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
    color: "#ededed",
    textAlign:"right",
  },
  inputText: {
    flex: 1,
    color: "#ffffff",
    fontSize: responsiveScreenFontSize(2.33), // 18
  },
});
