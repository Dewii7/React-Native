import {createStore} from 'redux';
import allReducer from './allReducer';

const Store = createStore(allReducer);

export default Store;
