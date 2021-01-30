/*
  Amaç: Çalışma, kısa mola, uzun mola sürelerini set etmek için reducer oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { timerSettingsTypes, timerSettingsState } from "./timerSettingsTypes";


const initialState : timerSettingsState = {
    // Çalışma süresi için state tanımlandı.
    durationWork: 4,
    // Kısa mola süresi için state tanımlandı.
    durationShortBreak: 5,
    // Uzun mola süresi için state tanımlandı.
    durationLongBreak: 6,
}


const reducer = (state = initialState, action:any ) => {
    switch (action.type) {
        // Çalışma süresini set etmek için reducer tanımlandı.
        case timerSettingsTypes.SET_WORK_TIME:
            return {
                ...state,
                durationWork: action.payload
            }
        // Kısa mola süresini set etmek için reducer tanımlandı.
        case timerSettingsTypes.SET_SHORT_BREAK_TIME:
            return {
                ...state,
                durationShortBreak: action.payload
            }
        // Uzun mola süresini set etmek için reducer tanımlandı.
        case timerSettingsTypes.SET_LONG_BREAK_TIME:
            return {
                ...state,
                durationLongBreak: action.payload
            }
        // Default durum tanımlandı.
        default: return state
    }
}

// Export edildi.
export default reducer