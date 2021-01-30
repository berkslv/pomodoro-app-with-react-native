export const timerTypes = {
    SET_CURRENT_PERIOD : "SET_CURRENT_PERIOD",
    SET_CURRENT_STATUS : "SET_CURRENT_STATUS",
    SET_TIMER_KEY : "SET_TIMER_KEY"
}

export type timerState = {
    currentPeriod:number,
    currentStatus:string,
    timerKey:number
}