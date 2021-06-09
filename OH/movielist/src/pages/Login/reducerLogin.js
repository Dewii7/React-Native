const initialState = {
  isLogin: false,
  name: '',
  // kota: 'sumbawa',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLogin: true,
        name: action.payload,
        // kota: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
