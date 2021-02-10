/**
 * @file The types created for the user interface.
 * @author Berk selvi
 * @license Apache-2.0
 */
export const userInterfaceTypes = {
    SET_TIME_FORMAT : "SET_TIME_FORMAT",
    SET_GOAL_FORMAT : "SET_GOAL_FORMAT",
}

export type userInterfaceState = {

    /**
     * The state was defined to format the historical (1 day) working time presented from the Pomodoro screen. 
     * It can be presented as Hours:Minutes or Minutes
     * @type {number}
     */
    formatTime: number,

    /**
     * A state has been defined to format the interface that indicates the user's goal presented on the Pomodoro screen.
     * It can be presented as Target/Done or Done
     * @type {number}
     */
    formatTarget: number,
    
}