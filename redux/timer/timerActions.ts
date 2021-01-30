/*
  Amaç: Şuanki sayaç durumunu & süresini & değişim anahtarını belirlemek için action oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { timerTypes } from "./timerTypes";

// Şuanki sayacın kaç saniye olduğunu belirtmek için action.
export const setCounterDuration = ( period:number ) => {
    return {
        type : timerTypes.SET_CURRENT_PERIOD,
        payload : period
    }
}

// Şuanki sayacın durumunu belirtmek için action.
export const setCounterStatus = ( status:string ) => {
    return {
        type : timerTypes.SET_CURRENT_STATUS,
        payload : status
    }
}

// Bağımlılık anahtarı için action.
export const setCounterKey = ( currentKey:number ) => {
    return {
        type : timerTypes.SET_TIMER_KEY,
        payload : currentKey + 1
    }
}