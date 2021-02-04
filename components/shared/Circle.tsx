/*
  Amaç: Timer.tsx içerisinde, Kontrol butonu olarak kullanılıyor.
  Son düzenlenme: 02/02/2021
  Son düzenleyen: berk selvi
*/
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

    // Kullanıcı buttonPressHandler fonksiyonunu tetikliyor, 
    //  o fonksiyonda tasarımsal bir işlem yapılmıyor, burada butonların tasarımı ve içeriği belirleniyor.
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

    return (
        <TouchableOpacity activeOpacity={opacity} onPress={() => { buttonPressHandler(condition) }}>
            <View style={[styles.circle,{backgroundColor:circleColor}]} >
                <View style={[styles.circleInside,{backgroundColor:circleInsideColor}]} >
                    <Text style={[styles.circleText,{backgroundColor:circleTextColor}]}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Circle;

const styles = StyleSheet.create({
    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    circleInside: {
        overflow:"hidden",
        width: 90,
        height: 90,
        borderRadius: 90/2,
    },
    circleText: {
        height:"100%",
        textAlign: "center",
        paddingVertical: 35,
        fontSize: 18,
    }
});
