import { FETCH_LOCATIONS_FAILURE,FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS } from "../locationAct";

const initialState = {
    locations: [],
    loading: false,
    error: null,
};

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: action.payload,
            };
        case FETCH_LOCATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default locationsReducer;