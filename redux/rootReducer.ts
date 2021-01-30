/*
  Amaç: Farklı reducer ları root reducer ile birleştirmek
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { combineReducers } from 'redux'

import timerSettingsReducer from "./timerSettings/timerSettingsReducer"
import timerReducer from "./timer/timerReducer"
import archiveReducer from "./archive/archiveReducer"
import userInterfaceReducer from "./userInterface/userInterfaceReducer"
import goalReducer from "./goal/goalReducer"


// Root reducer oluşturuldu.
const rootReducer = combineReducers({
  timerSettings:timerSettingsReducer,
  timer:timerReducer,
  archive:archiveReducer,
  userInterface:userInterfaceReducer,
  goal:goalReducer
})

// Export işlemi yapıldı.
export default rootReducer
