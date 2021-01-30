/*
  Amaç: Çalışma, kısa mola, uzun mola olarak kaç adet yapılmış, bunlar tarih tabanında veritabanı 
        mantığında tutmak için gerekli reducer lar oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { archiveTypes, archiveState } from "./archiveTypes";

// State array/object şeklinde tutuluyor.
const initialState : archiveState = {
    // Çalışma adeti için state tanımlandı.
    workDB : [],
    // Kısa mola adeti için state tanımlandı.
    shortBreakDB : [],
    // Uzun mola adeti için state tanımlandı.
    longBreakDB : [],
}


const reducer = (state = initialState, action:any ) => {
    switch (action.type) {
        // Çalışma adeti için reducer tanımlandı.
        case archiveTypes.WORK_COMPLETED:
            return {
                ...state,
                workDB: [...state.workDB, action.payload],
            }
        // Kısa mola adeti için reducer tanımlandı.
        case archiveTypes.SHORT_BREAK_COMPLETED:
            return {
                ...state,
                shortBreakDB: [...state.shortBreakDB, action.payload],
            }
        // Uzun mola adeti için reducer tanımlandı.
        case archiveTypes.LONG_BREAK_COMPLETED:
            return {
                ...state,
                longBreakDB: [...state.longBreakDB, action.payload],
            }
        // Default durum tanımlandı.
        default: return state
    }
}

// Export edildi.
export default reducer
  