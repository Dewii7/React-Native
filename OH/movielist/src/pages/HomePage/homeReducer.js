const initialState = {
  isLoading: false,
  data: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MOVIE_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case 'GET_MOVIE_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
