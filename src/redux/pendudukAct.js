export const FETCH_Penduduk_REQUEST = 'FETCH_Penduduk_REQUEST';
export const FETCH_Penduduk_SUCCESS = 'FETCH_Penduduk_SUCCESS';
export const FETCH_Penduduk_FAILURE = 'FETCH_Penduduk_FAILURE';

export const fetchPendudukRequest = () => ({
  type: FETCH_Penduduk_REQUEST,
});

export const fetchPendudukSuccess = (penduduk) => ({
  type: FETCH_Penduduk_SUCCESS,
  payload: penduduk,
});

export const fetchPendudukFailure = (error) => ({
  type: FETCH_Penduduk_FAILURE,
  payload: error,
});

export const fetchPenduduk = () => {
  return async (dispatch) => {
    dispatch(fetchPendudukRequest());
    try {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const data = await response.json();
      dispatch(fetchPendudukSuccess(data.results));
    } catch (error) {
      dispatch(fetchPendudukFailure(error.message));
    }
  };
};