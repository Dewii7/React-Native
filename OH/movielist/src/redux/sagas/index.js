import {all} from 'redux-saga/effects';
import homeSaga from '../../pages/HomePage/homeSaga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
