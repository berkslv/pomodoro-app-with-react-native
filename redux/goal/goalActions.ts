/**
 * @file Actions created for the user's goal.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { goalTypes } from "./goalTypes";

/**
 * Set user's daily goal.
 * @param {number} goalDaily 
 */
export const setGoalDaily = (goalDaily:number) => {
    return {
        type : goalTypes.SET_DAILY_GOAL,
        payload : goalDaily
    }
}

/**
 * Set user's little goal.
 * @param {number} goalLittle 
 */
export const setGoalLittle = (goalLittle:number) => {
    return {
        type : goalTypes.SET_LITTLE_GOAL,
        payload : goalLittle
    }
}