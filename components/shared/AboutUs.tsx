import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AboutUs = () => {
    return (
        <View style={styles.aboutUsParentContainer}>
            <Text style={styles.aboutUsTextTitle}>
            About Us
            </Text>
            
            <Text style={styles.aboutUsTextBody}>
            This project is open source. If you wish, you can review us and contribute. 
            </Text>
            
            <View style={styles.aboutUsIconContainer}>
                <TouchableOpacity onPress={()=>{Linking.openURL("https://github.com/berkslv/pomodoro-app-with-react-native")}}>
                    <Ionicons name="logo-github" size={36} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Linking.openURL("mailto:berkslv@gmail.com")}}>
                    <Ionicons name="mail" size={36} color="white" />
                </TouchableOpacity>
            </View>
            
            <Text style={styles.aboutUsTextFooter}>
            As we are open source, we put revenue on the 2nd plan, but we have ads for app survival. However, we are trying to present this in the most comfortable way.        
            </Text>
      </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
  aboutUsParentContainer: {
    backgroundColor: "#141414",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "column",
    marginTop: 30,
  },
  aboutUsIconContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  aboutUsTextTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: 20,
    textAlign:"center",
    borderBottomWidth: 1,
    borderBottomColor: "#363636",
    paddingVertical: 10,
  },
  aboutUsTextBody:{
    flex: 1,
    color: "#d4d4d4",
    fontSize: 16,
    textAlign:"center",
    marginBottom:15,
  },
  aboutUsTextFooter: {
    flex: 1,
    color: "#999999",
    fontSize: 14,
    paddingTop: 15,
  },
})
