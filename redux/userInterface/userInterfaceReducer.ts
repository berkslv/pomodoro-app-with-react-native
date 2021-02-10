/**
 * @file To set different interface options that can be preferred from the user interface.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { userInterfaceTypes, userInterfaceState } from "./userInterfaceTypes";

// Check out special type for detailed information. 
const initialState : userInterfaceState = {
    formatTime : 0,
    formatTarget : 0,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // reducer case for formatTime.
        case userInterfaceTypes.SET_TIME_FORMAT:
            return {
                ...state,
                formatTime: action.payload,
            }
        // reducer case for formatTarget.
        case userInterfaceTypes.SET_GOAL_FORMAT:
            return {
                ...state,
                formatTarget: action.payload,
            }
        // default statement was created.
        default: return state
    }
}

export default reducer
