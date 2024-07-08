import {
  FETCH_Penduduk_REQUEST,
  FETCH_Penduduk_SUCCESS,
  FETCH_Penduduk_FAILURE,
} from "../pendudukAct";

const initialState = {
  loading: false,
  penduduk: [],
  error: null,
};

const pendudukReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Penduduk_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_Penduduk_SUCCESS:
      return {
        loading: false,
        penduduk: action.payload,
        error: null,
      };
    case FETCH_Penduduk_FAILURE:
      return {
        loading: false,
        penduduk: [],
        error: action.payload,
      };
      default:
        return state;
  }
};

export default pendudukReducer