export const changeNameOnSignUp = username => {
  return {
    type: 'SET_NAME_ON_SIGNUP',
    username,
  };
};

export const changeEmailOnSignUp = email => {
  return {
    type: 'SET_EMAIL_ON_SIGNUP',
    email,
  };
};

export const changeSandiOnSignUp = password => {
  return {
    type: 'SET_SANDI_ON_SIGNUP',
    password,
  };
};
