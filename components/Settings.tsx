import React, { Ref, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
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
  setCurrentPeriod
} from "../redux";
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import { Formik } from "formik"; // DO npm uninstall formik
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import AboutUs from "./shared/AboutUs";


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
  }

  const resetTimer = (e:any) => {
    switch (currentStatus) {
      case pomodoroTypes.WORK:
        setCurrentPeriod(e);
        break;
      case pomodoroTypes.SHORT_BREAK:
        setCurrentPeriod(e);
        break;
      case pomodoroTypes.LONG_BREAK:
        setCurrentPeriod(e);
        break;
      default:
        console.error("an error occur on setting switches");
        break;
    }

    setTimerKey(timerKey);
    setCurrentActivity(false);
  }


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inputParentContainer}>
        <TouchableWithoutFeedback onPress={() => { focusEvent(workTimeRef) }} style={styles.inputContainer}>
          <Text style={styles.inputText}>Work time</Text>
          <TextInput
            ref={workTimeRef}
            style={styles.input}
            placeholder="Work time"
            value={durationWork.toString()}
            onChangeText={(e) => { setDurationWork(e); resetTimer(e);}}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { focusEvent(shortBreakRef) }} style={styles.inputContainer}>
          <Text style={styles.inputText}>Short break</Text>
          <TextInput
            ref={shortBreakRef}
            style={styles.input}
            placeholder="Work time"
            onChangeText={(e) => { setDurationShortBreak(e); resetTimer(e);}}
            value={durationShortBreak.toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { focusEvent(longBreakRef) }} style={styles.inputLastContainer}>
          <Text style={styles.inputText}>Long break</Text>
          <TextInput
            ref={longBreakRef}
            style={styles.input}
            placeholder="Work time"
            onChangeText={(e) => { setDurationLongBreak(e); resetTimer(e);}}
            value={durationLongBreak.toString()}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.inputParentContainer}>
        <TouchableWithoutFeedback onPress={() => { focusEvent(workTimeRef) }} style={styles.inputContainer}>
          <Text style={styles.inputText}>Little goal</Text>
          <TextInput
            ref={goalLittleRef}
            style={styles.input}
            placeholder="Little goal"
            value={goalLittle.toString()}
            onChangeText={(e) => { setGoalLittle(e)}}
            keyboardType="number-pad"
            selectTextOnFocus
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { focusEvent(shortBreakRef) }} style={styles.inputLastContainer}>
          <Text style={styles.inputText}>Daily goal</Text>
          <TextInput
            ref={goalDailyRef}
            style={styles.input}
            placeholder="Daily goal"
            onChangeText={(e) => { setGoalDaily(e)}}
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
    setCurrentActivity: (activity: boolean) => dispatch(setCurrentActivity(activity)),
  };
};

// redux bağlantısı kuruyoruz.
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  inputParentContainer: {
    backgroundColor: "#141414",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "column",
    marginTop: 30,
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
    padding: 10,
    fontSize: 20,
    color: "#ededed",
    textAlign: "center",
  },
  inputText: {
    flex: 1,
    color: "#ffffff",
    fontSize: 18,
  },
});