// khusus buat Login

const initialState = {
  isLogin: false,
  name: '',
};

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLogin: true,
        name: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducerLogin;
