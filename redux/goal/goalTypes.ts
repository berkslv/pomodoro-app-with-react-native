/**
 * @file The types created for the user's goal
 * @author Berk selvi
 * @license Apache-2.0
 */
export const goalTypes = {
    SET_DAILY_GOAL : "SET_DAILY_GOAL",
    SET_LITTLE_GOAL : "SET_LITTLE_GOAL",
}

export type gaolState = {

    /**
     * State for daily goal.
     * @type {number} 
     */
    goalDaily : number,

    /**
     * State for little goal. 
     * @type {number}
     */
    goalLittle : number,

}