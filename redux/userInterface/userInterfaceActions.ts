/*
  Amaç: Kullanıcı arayüzünden tercih edilebilen, farklı arayüz seçeneklerini set etmek için actions
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { userInterfaceTypes } from "./userInterfaceTypes";

// Pomodoro ekranından sunulan geçmiş (1 günlük) çalışma süresini format etmek için action tanımlandı. H:D veya D olarak sunulabilir.
export const setFormatTime = (formatTime:any) => {
    return {
        type : userInterfaceTypes.SET_TIME_FORMAT,
        payload : formatTime,
    }
}

// Pomodoro ekranından sunulan kullanıcının hedefini belirten arayüzü format etmek için action tanımlandı. Hedef/Yapılan veya Yapılan olarak sunulabilir.
export const setFormatTarget = (formatTarget:any) => {
    return {
        type : userInterfaceTypes.SET_GOAL_FORMAT,
        payload : formatTarget,
    }
}