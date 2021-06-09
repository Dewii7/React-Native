import {takeLatest, put} from 'redux-saga/effects';
import {getDataMovieApi} from './homeApi';
import {
  getDataMovieAction,
  getDataMovieActionFailed,
  getDataMovieActionSuccess,
} from './homeAction';
import {ToastAndroid} from 'react-native';

function* getDataMovie() {
  try {
    const dataMovie = yield getDataMovieApi();
    if (dataMovie && dataMovie.data) {
      console.log(dataMovie.data.results);
      ToastAndroid.showWithGravity(
        'Berhasil mengambil data Field',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      yield put(getDataMovieActionSuccess(dataMovie.data.results));
    } else {
      ToastAndroid.showWithGravity(
        'Gagal mengambil data Field',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      yield put(getDataMovieActionFailed());
    }
  } catch (e) {
    ToastAndroid.showWithGravity(
      'Gagal mengambil data Field',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    yield put(getDataMovieActionFailed());
  }
}

function* homeSaga() {
  yield takeLatest('GET_MOVIE', getDataMovie);
}

export default homeSaga;
