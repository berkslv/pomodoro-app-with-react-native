import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";


const AboutUs = () => {
    return (
        <View style={styles.parentContainer}>
            <Text style={styles.textTitle}>
            About Us
            </Text>
            
            <Text style={styles.textBody}>
            This project is open source. If you wish, you can review us and contribute. 
            </Text>
            
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>{Linking.openURL("https://github.com/berkslv/pomodoro-app-with-react-native")}}>
                    <Ionicons name="logo-github" size={36} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Linking.openURL("mailto:berkslv@gmail.com")}}>
                    <Ionicons name="mail" size={36} color="white" />
                </TouchableOpacity>
            </View>
            
            <Text style={styles.textFooter}>
            As we are open source, we put revenue on the 2nd plan, but we have ads for app survival. However, we are trying to present this in the most comfortable way.        
            </Text>
      </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "#141414",
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
  },
  textTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: responsiveScreenFontSize(2.7), // 20
    textAlign:"center",
    paddingVertical: responsiveScreenHeight(1.5), // 10
  },
  textBody:{
    flex: 1,
    color: "#d4d4d4",
    fontSize: responsiveScreenFontSize(2.1), // 16
    textAlign:"center",
    marginBottom: responsiveScreenHeight(2), // 15
  },
  textFooter: {
    flex: 1,
    color: "#999999",
    fontSize: responsiveScreenFontSize(1.85), // 14
    paddingTop: responsiveScreenHeight(2), // 15
  },
})
