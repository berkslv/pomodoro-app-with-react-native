/**
 * @file Reducer was created for the basic features that the timer needs to run.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { timerTypes, timerState } from "./timerTypes";
import { pomodoroTypes } from "../../constants/PomodoroTypes";

// Check out special type for detailed information. 
const initialState : timerState = {
    currentPeriod : 1500,
    currentStatus : pomodoroTypes.WORK,
    currentActivity: false,
    timerKey : 0,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // reducer case for currentPeriod. 
        case timerTypes.SET_CURRENT_PERIOD:
            return {
                ...state,
                currentPeriod : action.payload
            }
        // reducer case for currentStatus. 
        case timerTypes.SET_CURRENT_STATUS:
            return {
                ...state,
                currentStatus : action.payload
            }
        // reducer case for currentActivity. 
        case timerTypes.SET_CURRENT_ACTIVITY:
            return {
                ...state,
                currentActivity : action.payload
            }
        // reducer case for timerKey. 
        case timerTypes.SET_TIMER_KEY:
            return {
                ...state,
                timerKey : action.payload
            }
        // default statement was created. 
        default: return state
    }
}

export default reducer
