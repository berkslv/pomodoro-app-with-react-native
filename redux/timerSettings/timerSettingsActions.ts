/*
  Amaç: Çalışma, kısa mola, uzun mola sürelerini set etmek.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { timerSettingsTypes } from "./timerSettingsTypes";

// Çalışma süresi için Action tanımlandı. 
export const setWorkDuration = ( durationWork:number ) => {
    return {
        type : timerSettingsTypes.SET_WORK_TIME,
        payload : durationWork
    }
}

// Kısa mola süresi için Action tanımlandı. 
export const setShortBreakDuration = ( durationShortBreak:number ) => {
    return {
        type : timerSettingsTypes.SET_SHORT_BREAK_TIME,
        payload : durationShortBreak
    }
}

// Uzun mola süresi için Action tanımlandı. 
export const setLongBreakDuration = ( durationLongBreak:number ) => {
    return {
        type : timerSettingsTypes.SET_LONG_BREAK_TIME,
        payload : durationLongBreak
    }
}