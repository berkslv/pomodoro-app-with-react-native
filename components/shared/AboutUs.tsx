/**
 * @file It's used inside Settings component. It's contains application informations.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import useColorScheme from '../../hooks/useColorScheme';
import { lightThemeColors, darkThemeColors } from "../../constants/Colors";
import I18n from "../../localization/_i18n";


const AboutUs = () => {
    const theme = useColorScheme();
    const [themeColor, setThemeColor] = useState((theme === "light") ? lightThemeColors : darkThemeColors);
    const [iconColor, setIconColor] = useState((theme === "light") ? "black" : "white" );

    return (
        <View style={[styles.parentContainer,{backgroundColor:themeColor.SETTINGS_BACKGROUND}]}>
            <Text style={[styles.textTitle,{color:themeColor.ABOUT_US_TITLE}]}>
              {I18n.t("about_us")}
            </Text>
            
            <Text style={[styles.textBody,{color:themeColor.ABOUT_US_BODY}]}>
              {I18n.t("about_us_title")}
            </Text>
            
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>{Linking.openURL("https://github.com/berkslv/pomodoro-app-with-react-native")}}>
                    <Ionicons name="logo-github" size={36} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Linking.openURL("mailto:berkslv@gmail.com")}}>
                    <Ionicons name="mail" size={36} color={iconColor} />
                </TouchableOpacity>
            </View>
            
            {/* This Text is no longer using it.
            <Text style={[styles.textFooter,{color:themeColor.ABOUT_US_FOOTER}]}>
              {I18n.t("about_us_body")}            
            </Text> 
            */}
      </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
  parentContainer: {
    paddingVertical: responsiveScreenHeight(0.8), // 5
    paddingHorizontal: responsiveScreenWidth(5), // 20
    flexDirection: "column",
    marginTop: responsiveScreenHeight(4), // 30
  },
  iconContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: responsiveScreenHeight(1.5), // 10
  },
  textTitle: {
    flex: 1,
    fontSize: responsiveScreenFontSize(2.7), // 20
    textAlign:"center",
    paddingVertical: responsiveScreenHeight(1.5), // 10
  },
  textBody:{
    flex: 1,
    fontSize: responsiveScreenFontSize(2.1), // 16
    textAlign:"center",
    marginBottom: responsiveScreenHeight(2), // 15
  },
  textFooter: {
    flex: 1,
    fontSize: responsiveScreenFontSize(1.85), // 14
    paddingTop: responsiveScreenHeight(2), // 15
  },
})
