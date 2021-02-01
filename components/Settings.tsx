import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from "react-native";
import { connect } from "react-redux";
import {
  setWorkDuration,
  setShortBreakDuration,
  setLongBreakDuration,
  setCounterDuration,
  setCounterKey,
  setDailyGoal,
  setLittleGoal,
} from "../Redux";
import SettingInput from "./Shared/SettingInput";

// TODO iletişim bilgilerini ekle.
// TODO Gelecek versiyonlarda siyah tema ekle
// TODO Gelecek versiyonlarda in-app satın alma ekle. Bununla tasarım sat.

const Settings = ({
  // states
  durationWork,
  durationShortBreak,
  durationLongBreak,
  counterStatus,
  counterKey,
  dailyGoal,
  littleGoal,
  // functions
  setWorkDuration,
  setShortBreakDuration,
  setLongBreakDuration,
  setCounterDuration,
  setCounterKey,
  setDailyGoal,
  setLittleGoal,
}) => {
  const timeFormater = (timeData) => {
    return (timeData / 60).toString();
  };

  const onChangeHandlerForTimes = (val, statusCode) => {
    val = val * 60;

    if (statusCode == 1) {
      setWorkDuration(val);
      if (counterStatus == 1) {
        setCounterDuration(val);
        setCounterKey(counterKey + 1);
      }
    } else if (statusCode == 2) {
      setShortBreakDuration(val);
      if (counterStatus == 2) {
        setCounterDuration(val);
        setCounterKey(counterKey + 1);
      }
    } else if (statusCode == 3) {
      setLongBreakDuration(val);
      if (counterStatus == 3) {
        setCounterDuration(val);
        setCounterKey(counterKey + 1);
      }
    } else {
      console.log("some error occured on setting.js");
    }
  };

  const onChangeHandlerForGoals = (val, statusCode) => {
    if (statusCode == 1) {
      setDailyGoal(val)
      setCounterKey(counterKey + 1);
    }
    else if(statusCode == 2)
    {
      setLittleGoal(val)
      setCounterKey(counterKey + 1);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Text style={styles.formHeader}>Set times</Text>
          <SettingInput
            text={"Work time"}
            data={timeFormater(durationWork)}
            queue={false}
            changeHandler={onChangeHandlerForTimes}
            statusCode={1}
          />
          <SettingInput
            text={"Short break time"}
            data={timeFormater(durationShortBreak)}
            queue={false}
            changeHandler={onChangeHandlerForTimes}
            statusCode={2}
          />
          <SettingInput
            text={"Long break time"}
            data={timeFormater(durationLongBreak)}
            queue={true}
            changeHandler={onChangeHandlerForTimes}
            statusCode={3}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.formHeader}>Pomodoro goal</Text>
          <SettingInput
            text={"Daily goal"}
            data={dailyGoal.toString()}
            queue={false}
            changeHandler={onChangeHandlerForGoals}
            statusCode={1}
          />
          <SettingInput
            text={"Long break goal"}
            data={littleGoal.toString()}
            queue={true}
            changeHandler={onChangeHandlerForGoals}
            statusCode={2}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => {
  return {
    durationWork: state.counter.durationWork,
    durationShortBreak: state.counter.durationShortBreak,
    durationLongBreak: state.counter.durationLongBreak,

    counterStatus: state.counter.counterStatus,
    counterKey: state.counter.counterKey,
    
    dailyGoal: state.counter.dailyGoal,
    littleGoal: state.counter.littleGoal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWorkDuration: (durationWork) => dispatch(setWorkDuration(durationWork)),
    setShortBreakDuration: (durationShortBreak) =>
      dispatch(setShortBreakDuration(durationShortBreak)),
    setLongBreakDuration: (durationLongBreak) =>
      dispatch(setLongBreakDuration(durationLongBreak)),

    setCounterDuration: (statusCode) =>
      dispatch(setCounterDuration(statusCode)),
    setCounterKey: (currentKey) => dispatch(setCounterKey(currentKey)),

    setDailyGoal: (dailyGoal) => dispatch(setDailyGoal(dailyGoal)),
    setLittleGoal: (littleGoal) => dispatch(setLittleGoal(littleGoal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  parentContainer:{
    flex:1,
  },
  container: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  text: {
    fontSize: 23,
    paddingLeft: 10,
  },
  formHeader: {
    padding: 5,
    fontSize: 16,
    color: "gray",
  }
  
});
