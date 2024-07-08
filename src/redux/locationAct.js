export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export const fetchLocationsRequest = () => ({
    type: FETCH_LOCATIONS_REQUEST,
});

export const fetchLocationsSuccess = (data) => ({
    type: FETCH_LOCATIONS_SUCCESS,
    payload: data,
});

export const fetchLocationsFailure = (error) => ({
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
});

export const fetchLocations = () => {
    return async (dispatch) => {
        dispatch(fetchLocationsRequest());
        try {
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const data = await response.json();
            dispatch(fetchLocationsSuccess(data.data));
        } catch (error) {
            dispatch(fetchLocationsFailure(error.message));
        }
    };
};