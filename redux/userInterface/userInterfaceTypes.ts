export const userInterfaceTypes = {
    SET_TIME_FORMAT : "SET_TIME_FORMAT",
    SET_GOAL_FORMAT : "SET_GOAL_FORMAT",
}

export type userInterfaceState = {
    formatTime: number,
    formatTarget: number,
}