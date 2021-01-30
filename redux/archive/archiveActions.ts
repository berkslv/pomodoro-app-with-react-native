/*
  Amaç: Çalışma, kısa mola, uzun mola olarak kaç adet yapılmış, bunlar tarih tabanında veritabanı 
        mantığında tutmak için gerekli action lar oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { archiveTypes } from "./archiveTypes";

// Çalışma adeti için Action tanımlandı. 
export const completedWork = () => {
    return {
        type : archiveTypes.WORK_COMPLETED,
        payload : { date: new Date() }
    }
}

// Kısa mola adeti için Action tanımlandı. 
export const completedShortBreak = () => {
    return {
        type : archiveTypes.SHORT_BREAK_COMPLETED,
        payload : { date: new Date() }
    }
}

// Uzun mola adeti için Action tanımlandı. 
export const completedLongBreak = () => {
    return {
        type : archiveTypes.LONG_BREAK_COMPLETED,
        payload : { date: new Date() }
    }
}
