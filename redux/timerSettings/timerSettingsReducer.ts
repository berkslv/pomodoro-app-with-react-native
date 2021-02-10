/**
 * @file Work and break times are set in settings component. For these timerSettings reducer was created.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { timerSettingsTypes, timerSettingsState } from "./timerSettingsTypes";

// Check out special type for detailed information. 
const initialState : timerSettingsState = {
    durationWork: 1500,
    durationShortBreak: 600,
    durationLongBreak: 1800,
}


const reducer = (state = initialState, action:any ) => {
    switch (action.type) {
        // reducer case for durationWork. 
        case timerSettingsTypes.SET_WORK_TIME:
            return {
                ...state,
                durationWork: action.payload
            }
        // reducer case for durationShortBreak. 
        case timerSettingsTypes.SET_SHORT_BREAK_TIME:
            return {
                ...state,
                durationShortBreak: action.payload
            }
        // reducer case for durationLongBreak. 
        case timerSettingsTypes.SET_LONG_BREAK_TIME:
            return {
                ...state,
                durationLongBreak: action.payload
            }
        // default statement was created. 
        default: return state
    }
}

export default reducer