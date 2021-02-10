/**
 * @file The types created for the time's properties.
 * @author Berk selvi
 * @license Apache-2.0
 */
export const timerTypes = {
    SET_CURRENT_PERIOD : "SET_CURRENT_PERIOD",
    SET_CURRENT_STATUS : "SET_CURRENT_STATUS",
    SET_CURRENT_ACTIVITY : "SET_CURRENT_ACTIVITY",
    SET_TIMER_KEY : "SET_TIMER_KEY"
}

export type timerState = {

    /**
     * State to indicate how many seconds the current counter is.
     * @type {number}
     */
    currentPeriod:number,

    /**
     * State to indicate the status of the current timer. This could be work, short break or long break.
     * @type {string}
     */
    currentStatus:string,

    /**
     * Status indicating the active state of the current timer.
     * @type {boolean}
     */
    currentActivity:boolean,

    /**
     * We change this value to reset the counter. It is a dependency value for the custom package used.
     * @type {number}
     */
    timerKey:number
    
}