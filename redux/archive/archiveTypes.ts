export const archiveTypes = {
    WORK_COMPLETED : "WORK_COMPLETED",
    SHORT_BREAK_COMPLETED : "SHORT_BREAK_COMPLETED",
    LONG_BREAK_COMPLETED : "LONG_BREAK_COMPLETED",
}


export type archiveState = {
    workDB: Array<object>,
    shortBreakDB: Array<object>,
    longBreakDB: Array<object>
}