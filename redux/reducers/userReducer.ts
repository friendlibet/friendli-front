const INITIAL_STATE = {
  userInfo: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GETUSERINFO": {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
  }

  return state;
};

export default userReducer;
