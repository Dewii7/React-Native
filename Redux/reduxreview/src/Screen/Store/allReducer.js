import {combineReducers} from 'redux';
import SignUpReducer from '../SignUp/reducer';

const allReducer = combineReducers({
  SignUp: SignUpReducer,
});

export default allReducer;
