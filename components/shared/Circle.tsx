import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { START, PAUSE, CANCEL, RESUME, DISABLE } from "../../constants/ButtonTypes";
import useColorScheme from '../../hooks/useColorScheme';
import { lightThemeColors, darkThemeColors } from "../../constants/Colors";



const Circle = ({ condition, buttonPressHandler }: { condition: any, buttonPressHandler: any }) => {
    const theme = useColorScheme();
    const [themeColor, setThemeColor] = useState((theme==="light")?lightThemeColors:darkThemeColors);
    const [circleColor, setCircleColor] = useState(themeColor.SECONDARY);
    const [circleInsideColor, setCircleInsideColor] = useState(themeColor.SECONDARY);
    const [circleTextColor, setCircleTextColor] = useState(themeColor.SECONDARY);
    const [opacity, setOpacity] = useState(0.5);
    const [text, setText] = useState("");

    useEffect(() => {
        decider();
    });

    const decider = () => {
        switch (condition) {
            case DISABLE:
                setOpacity(1);
                setText("Cancel");
                setCircleColor(themeColor.DISABLE_OUT);
                setCircleInsideColor(themeColor.DISABLE_IN);
                setCircleTextColor(themeColor.DISABLE_TEXT);
                break;
            case CANCEL:
                setText("Cancel");
                setCircleColor(themeColor.CANCEL_OUT);
                setCircleInsideColor(themeColor.CANCEL_IN);
                setCircleTextColor(themeColor.CANCEL_TEXT);
                break;
            case START:
                setText("Start");
                setCircleColor(themeColor.START_OUT);
                setCircleInsideColor(themeColor.START_IN);
                setCircleTextColor(themeColor.START_TEXT);
                break;
            case RESUME:
                setText("Resume");
                setCircleColor(themeColor.RESUME_OUT);
                setCircleInsideColor(themeColor.RESUME_IN);
                setCircleTextColor(themeColor.RESUME_TEXT);
                break;
            case PAUSE:
                setText("Pause");
                setCircleColor(themeColor.PAUSE_OUT);
                setCircleInsideColor(themeColor.PAUSE_IN);
                setCircleTextColor(themeColor.PAUESE_TEXT);
                break;
            default:
                break;
        }
    };

    const dynamicStyle_circle = (color: any) => {
        return {
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: color,
        } as const;
    };

    const dynamicStyle_circleInside = (color: any) => {
        return {
            width: 90,
            height: 90,
            borderRadius: 90 / 2,
            backgroundColor: color,
        } as const;
    };

    const dynamicStyle_textCircle = (color: any) => {
        return {
            textAlign: "center",
            paddingTop: 35,
            fontSize: 18,
            color: color,
        } as const;
    };

    return (
        <TouchableOpacity activeOpacity={opacity} style={styles.touchableButton} onPress={() => { buttonPressHandler(condition) }}>
            <View style={dynamicStyle_circle(circleColor)}>
                <View style={dynamicStyle_circleInside(circleInsideColor)}>
                    <Text style={dynamicStyle_textCircle(circleTextColor)}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Circle;

const styles = StyleSheet.create({
    touchableButton: {

    },
});
