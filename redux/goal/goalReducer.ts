/**
 * @file Reducer was created for the little and daily goals.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { goalTypes, gaolState } from "./goalTypes";

// Check out special type for detailed information. 
const initialState : gaolState = {
    goalDaily : 12,
    goalLittle : 4,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // reducer case for goalDaily.
        case goalTypes.SET_DAILY_GOAL:
            return {
                ...state,
                goalDaily : action.payload
            }
        // reducer case for goalLittle.
        case goalTypes.SET_LITTLE_GOAL:
            return {
                ...state,
                goalLittle : action.payload
            }
        // default statement was created. 
        default: return state
    }
}

// Export edildi.
export default reducer
