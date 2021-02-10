/**
 * @file Actions were created for timer settings.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { timerSettingsTypes } from "./timerSettingsTypes";

/**
 * Set work time.
 * @param {any} durationWork 
 */
export const setDurationWork = ( durationWork:any ) => {
    return {
        type : timerSettingsTypes.SET_WORK_TIME,
        payload : durationWork
    }
}

/**
 * Set short break time.
 * @param {any} durationShortBreak 
 */
export const setDurationShortBreak = ( durationShortBreak:any ) => {
    return {
        type : timerSettingsTypes.SET_SHORT_BREAK_TIME,
        payload : durationShortBreak
    }
}

/**
 * Set long break time.
 * @param {any} durationLongBreak 
 */
export const setDurationLongBreak = ( durationLongBreak:any ) => {
    return {
        type : timerSettingsTypes.SET_LONG_BREAK_TIME,
        payload : durationLongBreak
    }
}