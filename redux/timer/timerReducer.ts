/*
  Amaç: Şuanki sayaç durumunu & süresini & değişim anahtarını belirlemek için reducer oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { timerTypes, timerState } from "./timerTypes";
import { pomodoroTypes } from "../../constants/PomodoroTypes";

const initialState : timerState = {
    // Şuanki sayacın kaç saniye olduğunu belirtmek için state.
    currentPeriod : 4,
    // Şuanki sayacın durumunu belirtmek için state.
    currentStatus : pomodoroTypes.WORK,
    // Sayacı resetlemek için bu değeri değiştiriyoruz. Bu bağımlılık için state.
    timerKey : 0,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // Şuanki sayacın kaç saniye olduğunu belirtmek için reducer tanımlandı.
        case timerTypes.SET_CURRENT_PERIOD:
            return {
                ...state,
                counterDuration : action.payload
            }
        // Şuanki sayacın durumunu belirtmek için reducer tanımlandı.
        case timerTypes.SET_CURRENT_STATUS:
            return {
                ...state,
                counterStatus : action.payload
            }
        // Bağımlılık anahtarı için reducer tanımlandı.
        case timerTypes.SET_TIMER_KEY:
            return {
                ...state,
                counterKey : action.payload
            }
        // Default durum tanımlandı.
        default: return state
    }
}

// Export edildi.
export default reducer
