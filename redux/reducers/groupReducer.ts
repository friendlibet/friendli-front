const INITIAL_STATE = {
  groups: [],
};

const groupReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GETGROUPSINFO": {
      return {
        ...state,
        groups: action.payload,
      };
    }
    case "ADDGROUP": {
      const newArray: any = [...state.groups];
      newArray.push(action.payload);
      console.log("newArray", newArray);
      return {
        ...state,
        groups: newArray,
      };
    }
  }

  return state;
};

export default groupReducer;
