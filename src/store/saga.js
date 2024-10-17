import { put, takeEvery } from 'redux-saga/effects';
import { clearStrings } from './actions/actions';

function* clearStringsSaga() {
  try {
    yield put(clearStrings());
  } catch (e) {
    console.error(e);
  }
}

function* sagaFunc() {
  yield takeEvery(clearStringsSaga);
}

function* rootSaga(){
    yield sagaFunc()
}

export default rootSaga;