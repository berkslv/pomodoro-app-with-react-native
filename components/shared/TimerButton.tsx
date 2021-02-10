/**
 * @file It's used inside Timer component. It's a control button.
 * @author Berk selvi
 * @license Apache-2.0
 */
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { START, PAUSE, CANCEL, RESUME, DISABLE } from "../../constants/ButtonTypes";
import useColorScheme from '../../hooks/useColorScheme';
import { lightThemeColors, darkThemeColors } from "../../constants/Colors";
import {
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import I18n from "../../localization/_i18n";


const TimerButton = ({ condition, buttonPressHandler }: { condition: any, buttonPressHandler: any }) => {
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

    // Kullanıcı buttonPressHandler fonksiyonunu tetikliyor, 
    //  o fonksiyonda tasarımsal bir işlem yapılmıyor, burada butonların tasarımı ve içeriği belirleniyor.
    const decider = () => {
        switch (condition) {
            case DISABLE:
                setOpacity(1);
                setText(I18n.t("cancel"));
                setCircleColor(themeColor.DISABLE_OUT);
                setCircleInsideColor(themeColor.DISABLE_IN);
                setCircleTextColor(themeColor.DISABLE_TEXT);
                break;
            case CANCEL:
                setText(I18n.t("cancel"));
                setCircleColor(themeColor.CANCEL_OUT);
                setCircleInsideColor(themeColor.CANCEL_IN);
                setCircleTextColor(themeColor.CANCEL_TEXT);
                break;
            case START:
                setText(I18n.t("start"));
                setCircleColor(themeColor.START_OUT);
                setCircleInsideColor(themeColor.START_IN);
                setCircleTextColor(themeColor.START_TEXT);
                break;
            case RESUME:
                setText(I18n.t("resume"));
                setCircleColor(themeColor.RESUME_OUT);
                setCircleInsideColor(themeColor.RESUME_IN);
                setCircleTextColor(themeColor.RESUME_TEXT);
                break;
            case PAUSE:
                setText(I18n.t("pause"));
                setCircleColor(themeColor.PAUSE_OUT);
                setCircleInsideColor(themeColor.PAUSE_IN);
                setCircleTextColor(themeColor.PAUESE_TEXT); 
                break;
            default:
                break;
        }
    };

    return (
        <TouchableOpacity activeOpacity={opacity} onPress={() => { buttonPressHandler(condition) }}>
            <View style={[styles.circle,{backgroundColor:circleColor}]} >
                <View style={[styles.circleInside,{backgroundColor:circleInsideColor}]} >
                    <Text style={[styles.circleText,{color:circleTextColor}]}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TimerButton;

const styles = StyleSheet.create({
    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: responsiveScreenFontSize(10), // 100
        height: responsiveScreenFontSize(10), // 100
        borderRadius: responsiveScreenFontSize(5), // 50
    },
    circleInside: {
        overflow:"hidden",
        width: responsiveScreenFontSize(12), // 90
        height: responsiveScreenFontSize(12), // 90
        borderRadius: responsiveScreenFontSize(6), // 45
    },
    circleText: {
        height:"100%",
        textAlign: "center",
        paddingVertical: responsiveScreenFontSize(4.5), // 35
        fontSize: responsiveScreenFontSize(2.2), // 18
    }
});
