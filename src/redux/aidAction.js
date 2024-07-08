export const addAid = (aid) => {
    return {
      type: 'ADD_AID',
      payload: aid,
    };
  };
  

export const editAid = (aid) => {
    return {
      type: 'EDIT_AID',
      payload: aid,
    };
  };