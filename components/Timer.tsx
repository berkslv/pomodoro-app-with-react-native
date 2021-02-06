/*
  Amaç: Uygulamanın yürütüldüğü ana component. Neredeyse çoğu işlem 
        buradan yapılıyor, pomodoro uygulaması buradan kullanıcıya sunuluyor.
  Son düzenlenme: 02/02/2021
  Son düzenleyen: berk selvi
*/
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { connect } from "react-redux";
import {
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCurrentPeriod,
  setCurrentStatus,
  setTimerKey,
  setCurrentActivity
} from "../redux";
import TimerButton from "./shared/TimerButton";
import useColorScheme from '../hooks/useColorScheme';
import { START, PAUSE, CANCEL, RESUME, DISABLE } from "../constants/ButtonTypes";
import { pomodoroTypes } from "../constants/PomodoroTypes";
import { lightThemeColors, darkThemeColors } from "../constants/Colors";
import useNotification from "../hooks/useNotification";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Counter = ({
  // functions
  completedWork,
  completedShortBreak,
  completedLongBreak,
  setFormatTime,
  setFormatTarget,
  setCurrentPeriod,
  setCurrentStatus,
  setTimerKey,
  setCurrentActivity,
  // states
  workDB,
  durationWork,
  durationShortBreak,
  durationLongBreak,
  formatTime,
  formatTarget,
  currentPeriod,
  currentStatus,
  currentActivity,
  timerKey,
  goalDaily,
  goalLittle,
}: any ) => {
  const theme = useColorScheme();
  const sendNotification = useNotification({ delayTime:parseInt(currentPeriod) ,notificationType:currentStatus });
  const [themeColor, setThemeColor] = useState((theme === "light") ? lightThemeColors : darkThemeColors);
  const [buttonCondition_Right, setButtonCondition_Right] = useState(START);
  const [buttonCondition_Left, setButtonCondition_Left] = useState(DISABLE);
  const [counterColor, setCounterColor] = useState(themeColor.TIMER_WORK);
  
  // Sayacın kontrol düğmelerinden parametre alarak işlemlere karar veriliyor. const olarak ifade geri dönüyor. 
  // Örnek olarak eğer switch CANCEL girerse CANCEL düğmesine basılmıştır.
  const buttonPressHandler = (currentCondition: string) => {
    switch (currentCondition) {
      case CANCEL:
        setTimerKey(timerKey + 1);
        setCurrentActivity(false);
        setButtonCondition_Right(START);
        setButtonCondition_Left(DISABLE);
        break;
      case START:
        sendNotification();

        setCurrentActivity(true);
        setButtonCondition_Right(PAUSE);
        setButtonCondition_Left(CANCEL);
        break;
      case RESUME:
        setCurrentActivity(true);
        setButtonCondition_Right(PAUSE);
        break;
      case PAUSE:
        setCurrentActivity(false);
        setButtonCondition_Right(RESUME);
      default:
        break;
    }
  };

  // Sayaç tamamlandığı zaman işliyor. Sayaç componentinin içerisinden çağırılıyor.
  const counterCompleted = () => {
    if (currentPeriod == durationWork && ((workDB.length + 1) % goalLittle != 0 || workDB.length == 0)) {
      // WORK bitti. SHORT_BREAK sıraya alındı.

      // Reducer içerisinde workDB değişkenine yazıldı.
      completedWork();
      
      // Sayacın durumu ve süresi güncellendi.
      setCurrentStatus(pomodoroTypes.SHORT_BREAK);
      setCurrentPeriod(durationShortBreak);

      // Tasarımla ilgili güncelleme. Sayacın rengi değiştirildi.
      setCounterColor(themeColor.SHORT_BREAK);
    } else if (currentPeriod == durationWork && (workDB.length + 1) % goalLittle == 0 && workDB.length != 0) {
      // WORK bitti. LONG_BREAK sıraya alındı.

      // Reducer içerisinde workDB değişkenine ekleme yapıldı.
      completedWork();

      // Sayacın durumu ve süresi güncellendi.
      setCurrentStatus(pomodoroTypes.LONG_BREAK);
      setCurrentPeriod(durationLongBreak);

      // Tasarımla ilgili güncelleme, Sayacın rengi değiştirildi.
      setCounterColor(themeColor.LONG_BREAK);
    } else if (currentPeriod == durationShortBreak) {
      // SHORT_BREAK bitti. WORK sıraya alındı.

      // Reducer içerisinde shortBreakDB değişkenine ekleme yapıldı.
      completedShortBreak();

      // Sayacın durumu ve süresi güncellendi.
      setCurrentStatus(pomodoroTypes.WORK);
      setCurrentPeriod(durationWork);

      // Tasarımla ilgili güncelleme, Sayacın rengi değiştirildi.
      setCounterColor(themeColor.TIMER_WORK);
    } else if (currentPeriod == durationLongBreak) {
      // LONG_BREAK bitti. WORK sıraya alındı.

      // Reducer içerisinde longBreakDB değişkenine ekleme yapıldı.
      completedLongBreak();

      // Sayacın durumu ve süresi güncellendi.
      setCurrentStatus(pomodoroTypes.WORK);
      setCurrentPeriod(durationWork);

      // Tasarımla ilgili güncelleme, Sayacın rengi değiştirildi.
      setCounterColor(themeColor.TIMER_WORK);
    } else {
      // Herhangi bir hata oluşursa bildirildi.
      console.error("An error occur when counter completed");
      setCounterColor(themeColor.ERROR);
    }

    // Sayacı sıfırlamak için paketle ilgili bir özellik. Sayacı sıfırlamak için bu değeri değiştirmemiz gerekiyor.
    setTimerKey(timerKey + 1);
    // Sayacı pasif hale getiriyoruz.
    setCurrentActivity(false);
    // Sağdaki butonu START yapıyoruz.
    setButtonCondition_Right(START);
    // Solcaki butonu DISABLE yapıyoruz.
    setButtonCondition_Left(DISABLE);
  };

  // Sayacın içerisinde gözüken süreyi formatlıyoruz. CountdownCircleTimer içerisinde çağırıyoruz.
  const countdownTimeFormater = (remainingTime: any) => {
    let minutes = Math.floor(remainingTime / 60).toString();
    let seconds = (remainingTime % 60).toString();

    if (seconds.length == 1) {
      seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  // Ekrandaki bugün içerisindeki çalışma süresini belirten kartı formatlıyoruz.
  const screenTimeFormater = () => {
    let totalMinute = 0;

      // Sadece bugüne ait verileri alıyoruz.
    workDB.forEach(( item:any ) => {
      if( item.date.toDateString() == new Date().toDateString() )
      {
        // totalMinute += durationWork;
        totalMinute += 25; // test için varım. İşlerin bitince bir üstteki kodu aç beni sil.
      }
    });

    let hour = Math.floor(totalMinute / 60).toString();
    let minute = (totalMinute % 60).toString();

    // formatTime değişkeni userInterface reducer içerisinden geliyor. Kartın üzerine tıklanarak güncelleniyor.
    if (formatTime == 0) {
      if (hour == "0") {
        return minute + " minutes";
      } else {
        return hour + " hours " + minute + " minutes";
      }
    } else {
      return Math.floor(totalMinute) + " minutes";
    }
  };

  // Ekrandaki bugün içerisindeki yapılan ve yapılacak olan hedefi belirten kartı formatlıyoruz.
  const screenTargetFormater = () => {
    // formatTarget değişkeni userInterface reducer içerisinden geliyor. Kartın üzerine tıklanarak güncelleniyor.
    let completedWork = 0;

    // Sadece bugüne ait verileri alıyoruz.
    workDB.forEach(( item:any ) => {
      if( item.date.toDateString() == new Date().toDateString() )
      {
        completedWork += 1;
      }
    });

    if (formatTarget == 0) {
      return completedWork + ` / ${goalDaily}`;
    } else {
      return completedWork;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying={currentActivity}
          duration={currentPeriod}
          size={responsiveScreenWidth(75)} // 270
          key={timerKey}
          colors={counterColor}
          onComplete={() => {
            counterCompleted();
            return [false, 5];
          }}
        >
          {({ remainingTime }) => (
            <View style={styles.countdownTextContainer}>
              <Text style={[styles.countdownText, { color: themeColor.SECONDARY }]}>
                {countdownTimeFormater(remainingTime)}
              </Text>
            </View>
          )}
        </CountdownCircleTimer>

        <View style={styles.controllers}>
          <TimerButton condition={buttonCondition_Left} buttonPressHandler={buttonPressHandler} />
          <TimerButton condition={buttonCondition_Right} buttonPressHandler={buttonPressHandler} />
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card, { borderColor: themeColor.CARD_OUT, backgroundColor: themeColor.CARD_IN }]}
            onPress={() => {
              formatTime == 0 ? setFormatTime(1) : setFormatTime(0);
            }}
          >
            <Text style={[styles.cardText, { color: themeColor.CARD_TEXT }]}>{screenTimeFormater()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card, { borderColor: themeColor.CARD_OUT, backgroundColor: themeColor.CARD_IN }]}
            onPress={() => {
              formatTarget == 0 ? setFormatTarget(1) : setFormatTarget(0);
            }}
          >
            <Text style={[styles.cardText, { color: themeColor.CARD_TEXT }]}>{screenTargetFormater()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// redux için state değişkenlerini map ediyoruz.
const mapStateToProps = (state: any) => {
  return {
    workDB: state.archive.workDB,
    shortBreakDB: state.archive.shortBreakDB,
    longBreakDB: state.archive.longBreakDB,

    durationWork: state.timerSettings.durationWork,
    durationShortBreak: state.timerSettings.durationShortBreak,
    durationLongBreak: state.timerSettings.durationLongBreak,

    formatTime: state.userInterface.formatTime,
    formatTarget: state.userInterface.formatTarget,

    currentPeriod: state.timer.currentPeriod,
    currentStatus: state.timer.currentStatus,
    currentActivity: state.timer.currentActivity,
    timerKey: state.timer.timerKey,

    goalDaily: state.goal.goalDaily,
    goalLittle: state.goal.goalLittle,
  };
};

// redux için fonksiyonları map ediyoruz.
const mapDispatchToProps = (dispatch: any) => {
  return {
    completedWork: () => dispatch(completedWork()),
    completedShortBreak: () => dispatch(completedShortBreak()),
    completedLongBreak: () => dispatch(completedLongBreak()),

    setFormatTime: (formatTime: any) => dispatch(setFormatTime(formatTime)),
    setFormatTarget: (formatTarget: any) => dispatch(setFormatTarget(formatTarget)),

    setCurrentPeriod: (duration: any) => dispatch(setCurrentPeriod(duration)),
    setCurrentStatus: (statusCode: any) => dispatch(setCurrentStatus(statusCode)),
    setTimerKey: (currentKey: any) => dispatch(setTimerKey(currentKey)),
    setCurrentActivity: (activity: boolean) => dispatch(setCurrentActivity(activity)),
  };
};

// redux bağlantısı kuruyoruz.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownContainer: {
    position: "absolute",
    top: responsiveScreenHeight(2), // 10
  },
  countdownTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownText: {
    fontSize: responsiveScreenFontSize(6), // 45
  },
  controllers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(4) // 30
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: responsiveScreenWidth(0.5), // 2
    borderRadius: responsiveScreenWidth(5), // 20
    width: "100%",
    paddingVertical: responsiveScreenHeight(1.8), // 15
    paddingHorizontal: responsiveScreenWidth(1.8), // 15
    marginVertical: responsiveScreenHeight(1.2), // 10
  },
  cardText: {
    fontSize: responsiveScreenFontSize(2.6), // 20
  },
});
