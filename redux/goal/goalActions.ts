/*
  Amaç: Günlük pomodoro hedefi ve pomodoro felsefesinin bir parçası olan çalışmaları küçük parçalara
        bölme işlmeindeki küçük parça hedefi için actions tanımlandı.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { goalTypes } from "./goalTypes";

export const setDailyGoal = (dailyGoal:number) => {
    return {
        type : goalTypes.SET_DAILY_GOAL,
        payload : dailyGoal
    }
}

export const setLittleGoal = (littleGoal:number) => {
    return {
        type : goalTypes.SET_LITTLE_GOAL,
        payload : littleGoal
    }
}