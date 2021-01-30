/*
  Amaç: Kullanıcı arayüzünden tercih edilebilen, farklı arayüz seçeneklerini set etmek için reducer
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { userInterfaceTypes, userInterfaceState } from "./userInterfaceTypes";

const initialState : userInterfaceState = {
    // Pomodoro ekranından sunulan geçmiş (1 günlük) çalışma süresini format etmek için state tanımlandı. H:D veya D olarak sunulabilir.
    formatTime : 0,
    // Pomodoro ekranından sunulan kullanıcının hedefini belirten arayüzü format etmek için state tanımlandı. Hedef/Yapılan veya Yapılan olarak sunulabilir.
    formatTarget : 0,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // Pomodoro ekranından sunulan geçmiş (1 günlük) çalışma süresini format etmek için reducer tanımlandı. H:D veya D olarak sunulabilir.
        case userInterfaceTypes.SET_TIME_FORMAT:
            return {
                ...state,
                formatTime: action.payload,
            }
        // Pomodoro ekranından sunulan kullanıcının hedefini belirten arayüzü format etmek için reducer tanımlandı. Hedef/Yapılan veya Yapılan olarak sunulabilir.
        case userInterfaceTypes.SET_GOAL_FORMAT:
            return {
                ...state,
                formatTarget: action.payload,
            }
        // Default durum tanımlandı.
        default: return state
    }
}

// Export edildi.
export default reducer
