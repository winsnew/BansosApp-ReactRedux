const initialState = {
  aidData: [],
};

const bansosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AID":
      return {
        ...state,
        aidData: [...state.aidData, action.payload],
      };
    case "EDIT_AID":
      return {
        ...state,
        aidData: state.aidData.map((aid) =>
          aid.id === action.payload.id ? action.payload : aid
        ),
      };
    default:
      return state;
  }
};

export default bansosReducer;
