/**
 * @file Combined different reducers into rootReducer
 * @author Berk selvi
 * @license Apache-2.0
 */
import { combineReducers } from 'redux'
import timerSettingsReducer from "./timerSettings/timerSettingsReducer"
import timerReducer from "./timer/timerReducer"
import archiveReducer from "./archive/archiveReducer"
import userInterfaceReducer from "./userInterface/userInterfaceReducer"
import goalReducer from "./goal/goalReducer"


/**
 * Root reducer was created
 */
const rootReducer = combineReducers({
  timerSettings:timerSettingsReducer,
  timer:timerReducer,
  archive:archiveReducer,
  userInterface:userInterfaceReducer,
  goal:goalReducer
})

export default rootReducer
