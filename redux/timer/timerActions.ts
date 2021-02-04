/*
  Amaç: Şuanki sayaç durumunu & süresini & değişim anahtarını belirlemek için action oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { timerTypes } from "./timerTypes";

// Şuanki sayacın kaç saniye olduğunu belirtmek için action.
export const setCurrentPeriod = ( period:number ) => {
    return {
        type : timerTypes.SET_CURRENT_PERIOD,
        payload : period
    }
}

// Şuanki sayacın durumunu belirtmek için action.
export const setCurrentStatus = ( status:string ) => {
    return {
        type : timerTypes.SET_CURRENT_STATUS,
        payload : status
    }
}
// Şanki sayacın aktiflik durumunu belirtmek için action.
export const setCurrentActivity = ( activity:boolean ) => {
    return {
        type : timerTypes.SET_CURRENT_ACTIVITY,
        payload : activity
    }
}

// Bağımlılık anahtarı için action.
export const setTimerKey = ( currentKey:number ) => {
    return {
        type : timerTypes.SET_TIMER_KEY,
        payload : currentKey + 1
    }
}