/**
 * @file A database-like reducer was created for the works and breaks.
 * @author Berk selvi
 * @license Apache-2.0
 */
import { archiveTypes, archiveState } from "./archiveTypes";

// Check out special type for detailed information. 
const initialState : archiveState = {
    workDB : [],
    shortBreakDB : [],
    longBreakDB : [],
}


const reducer = (state = initialState, action:any ) => {
    switch (action.type) {
        // reducer case for workDB. 
        case archiveTypes.WORK_COMPLETED:
            return {
                ...state,
                workDB: [...state.workDB, action.payload],
            }
        // reducer case for shortBreakDB. 
        case archiveTypes.SHORT_BREAK_COMPLETED:
            return {
                ...state,
                shortBreakDB: [...state.shortBreakDB, action.payload],
            }
        // reducer case for longBreakDB. 
        case archiveTypes.LONG_BREAK_COMPLETED:
            return {
                ...state,
                longBreakDB: [...state.longBreakDB, action.payload],
            }
        default: return state
    }
}

export default reducer
  