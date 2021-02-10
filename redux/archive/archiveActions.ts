/**
 * @file Actions created for the database-like archive
 * @author Berk selvi
 * @license Apache-2.0
 */
import { archiveTypes } from "./archiveTypes";

/**
 * Add 1 work done.
 */
export const completedWork = (time:number) => {
    return {
        type : archiveTypes.WORK_COMPLETED,
        payload : { date: new Date(), time:time}
    }
}

/**
 * Add 1 short break done.
 */
export const completedShortBreak = () => {
    return {
        type : archiveTypes.SHORT_BREAK_COMPLETED,
        payload : { date: new Date() }
    }
}

/**
 * Add 1 long break done.
 */
export const completedLongBreak = () => {
    return {
        type : archiveTypes.LONG_BREAK_COMPLETED,
        payload : { date: new Date() }
    }
}
