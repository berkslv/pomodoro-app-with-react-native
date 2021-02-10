/**
 * @file Actions created for the time's properties.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { timerTypes } from "./timerTypes";

/**
 * Set period for current timer.
 * @param {number} period 
 */
export const setCurrentPeriod = ( period:number ) => {
    return {
        type : timerTypes.SET_CURRENT_PERIOD,
        payload : period
    }
}

/**
 * Set status for current timer.
 * @param {string} status 
 */
export const setCurrentStatus = ( status:string ) => {
    return {
        type : timerTypes.SET_CURRENT_STATUS,
        payload : status
    }
}

/**
 * Set current activity for timer.
 * @param {boolean} activity 
 */
export const setCurrentActivity = ( activity:boolean ) => {
    return {
        type : timerTypes.SET_CURRENT_ACTIVITY,
        payload : activity
    }
}

/**
 * Set dependency key to reset timer.
 * @param {number} currentKey 
 */
export const setTimerKey = ( currentKey:number ) => {
    return {
        type : timerTypes.SET_TIMER_KEY,
        payload : currentKey + 1
    }
}