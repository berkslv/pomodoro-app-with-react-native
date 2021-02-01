import React, { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";

const SettingInput = ({ text, data, queue, changeHandler, statusCode }) => {
  const inputEl = useRef(null);

  const pressHandler = () => {
    inputEl.current.focus();
  };

  const borderWithController = {
    borderBottomWidth:(queue)?1:0
  }

  return (
    <TouchableWithoutFeedback
      style={[styles.inputForm,borderWithController]}
      onPress={() => {
        pressHandler();
      }}
    >
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={data}
        placeholderTextColor={"#000000"}
        keyboardType="numeric"
        ref={inputEl}
        onChangeText={(val)=>{changeHandler(val,statusCode)}}
      ></TextInput>
    </TouchableWithoutFeedback>
  );
};

export default SettingInput;

const styles = StyleSheet.create({
  inputForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    paddingLeft: 6,
    borderTopWidth : 1,
    borderColor: "grey",
  },
  textInput: {
    height: 40,
    fontSize: 25,
    paddingRight: 20,
  },
  text: {
    paddingLeft: 5,
    fontSize: 20,
  }
});
