export const timerSettingsTypes = {
    SET_WORK_TIME : "SET_WORK_TIME",
    SET_SHORT_BREAK_TIME : "SET_SHORT_BREAK_TIME",
    SET_LONG_BREAK_TIME : "SET_LONG_BREAK_TIME",
}

export type timerSettingsState = {
    durationWork: any,
    durationShortBreak: any,
    durationLongBreak: any
}