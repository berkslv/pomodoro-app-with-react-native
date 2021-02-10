/**
 * @file Actions were created for interface options.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { userInterfaceTypes } from "./userInterfaceTypes";

/**
 * Set way the done pomodoro time is presented from the user interface.
 * @param {number} formatTime 
 */
export const setFormatTime = (formatTime:number) => {
    return {
        type : userInterfaceTypes.SET_TIME_FORMAT,
        payload : formatTime,
    }
}

/**
 * Set way the done pomodoro goal is presented from the user interface.
 * @param {number} formatTarget 
 */
export const setFormatTarget = (formatTarget:number) => {
    return {
        type : userInterfaceTypes.SET_GOAL_FORMAT,
        payload : formatTarget,
    }
}