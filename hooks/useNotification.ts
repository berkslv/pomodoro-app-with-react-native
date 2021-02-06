import React, { useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { pomodoroTypes } from "../constants/PomodoroTypes";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: false,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const useNotification = ({delayTime,notificationType}:any) => {
    const [expoPushToken, setExpoPushToken]: any = useState('');
    const [notification, setNotification]: any = useState(false);
    const notificationListener: any = useRef();
    const responseListener: any = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token)).catch(err => console.error(err));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    function notificationTypeHandler(){
        let title,body = "";

        switch (notificationType) {
            case pomodoroTypes.WORK:
                title = "work";
                body = "work body";
                break;
            case pomodoroTypes.SHORT_BREAK:
                title = "short break";
                body = "short break body";
                break;
            case pomodoroTypes.LONG_BREAK:
                title = "long break";
                body = "long break body";
                break;
            default:
                break;
        }
        
        schedulePushNotification({title:title,body:body});
    }

    async function schedulePushNotification({title,body}:any){
        await Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: body,
                data: { data: 'goes here' },
            },
            trigger: { seconds: delayTime },
        });
    }
    
    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }
    
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    
        return token;
    }
    
    return notificationTypeHandler;
}

export default useNotification;

