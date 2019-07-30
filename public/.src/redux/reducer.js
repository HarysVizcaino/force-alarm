import constants from "../constants";
import { getTotal } from "./middlewares.js";

export const initialState = {
    data: {
        total: 0,
        province: false,
        selection: [],
        form: {},
        payment: {},
        status: ""
    },
    plans: [],
    step: 1
};

const Reducer = (state = initialState, action) => {

    /**
     * Simple log for our reducer
     */
    console.log("%c Reducer Action: %s", "font-weight:bold; color: #6B5ADF;", action.type, action );
    
    switch( action.type ) {
        
    case constants.STEP:
        return {
            ...state,
            step: action.data
        };
    case constants.SELECT_PLAN: 
        return {
            ...state,
            data: {
                ...state.data,
                selection: action.data,
                total: getTotal(action.data)
            }
        }
    default:
        return state;
    }
};

export default Reducer;