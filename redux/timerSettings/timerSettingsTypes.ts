/**
 * @file The types created for the time settings.
 * @author Berk selvi
 * @license Apache-2.0
 */
export const timerSettingsTypes = {
    SET_WORK_TIME : "SET_WORK_TIME",
    SET_SHORT_BREAK_TIME : "SET_SHORT_BREAK_TIME",
    SET_LONG_BREAK_TIME : "SET_LONG_BREAK_TIME",
}

/**
 * These types are "any" because it can be null when adjusting within the setting component. 
 * In such a case, "any" is used to prevent type errors.
 */
export type timerSettingsState = {

    /**
     * State was defined for work time. 
     * @type {any}
     */
    durationWork: any,

    /**
     * State was defined for short break time.
     * @type {any}
     */ 
    durationShortBreak: any,
    
    /**
     * State was defined for long break time. 
     * @type {any}
     */
    durationLongBreak: any
}