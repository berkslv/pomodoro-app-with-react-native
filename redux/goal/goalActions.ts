/*
  Amaç: Günlük pomodoro hedefi ve pomodoro felsefesinin bir parçası olan çalışmaları küçük parçalara
        bölme işlmeindeki küçük parça hedefi için actions tanımlandı.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { goalTypes } from "./goalTypes";

export const setGoalDaily = (goalDaily:number) => {
    return {
        type : goalTypes.SET_DAILY_GOAL,
        payload : goalDaily
    }
}

export const setGoalLittle = (goalLittle:number) => {
    return {
        type : goalTypes.SET_LITTLE_GOAL,
        payload : goalLittle
    }
}