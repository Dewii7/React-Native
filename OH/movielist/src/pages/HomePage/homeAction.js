export const getDataMovieAction = () => {
  return {
    type: 'GET_MOVIE',
  };
};

export const getDataMovieActionSuccess = payload => {
  return {
    type: 'GET_MOVIE_SUCCESS',
    payload,
  };
};

export const getDataMovieActionFailed = () => {
  return {
    type: 'GET_MOVIE_FAILED',
  };
};
