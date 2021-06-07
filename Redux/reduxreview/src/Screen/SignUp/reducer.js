const initialState = {
  email: '',
  username: '',
  password: '',
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME_ON_SIGNUP':
      return {
        ...state,
        username: action.username,
      };
    case 'SET_EMAIL_ON_SIGNUP':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_SANDI_ON_SIGNUP':
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
