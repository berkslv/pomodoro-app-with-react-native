/**
 * @file The types created for the database-like archive
 * @author Berk selvi
 * @license Apache-2.0
 */
export const archiveTypes = {
    WORK_COMPLETED : "WORK_COMPLETED",
    SHORT_BREAK_COMPLETED : "SHORT_BREAK_COMPLETED",
    LONG_BREAK_COMPLETED : "LONG_BREAK_COMPLETED",
}


export type archiveState = {

    /**
     * State for the work done.
     * @type { object[] }
     */
    workDB: Array<object>,

    /**
     * State for the short break done.
     * @type { object[] }
     */
    shortBreakDB: Array<object>,

    /**
     * State for the long break done.
     * @type { object[] }
     */
    longBreakDB: Array<object>

}