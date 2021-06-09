import {combineReducers} from 'redux';
import homeReducer from '../../pages/HomePage/homeReducer';
import loginReducer from '../../pages/Login/reducerLogin';

export default combineReducers({loginReducer, homeReducer});
