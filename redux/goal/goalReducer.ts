/*
  Amaç: Günlük pomodoro hedefi ve pomodoro felsefesinin bir parçası olan çalışmaları küçük parçalara
        bölme işlmeindeki küçük parça hedefi için reducers tanımlandı.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import { goalTypes, gaolState } from "./goalTypes";

const initialState : gaolState = {
    // Günlük hedef için state.
    goalDaily : 12,
    // Küçük parça olan hedef için state.
    goalLittle : 4,
}


const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        // Günlük hedef için reducer.
        case goalTypes.SET_DAILY_GOAL:
            return {
                ...state,
                goalDaily : action.payload
            }
        // Küçük parça olan hedef için reducer.
        case goalTypes.SET_LITTLE_GOAL:
            return {
                ...state,
                goalLittle : action.payload
            }
        // Default durum tanımlandı.
        default: return state
    }
}

// Export edildi.
export default reducer
