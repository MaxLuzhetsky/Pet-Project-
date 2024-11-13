import { all, put, takeEvery } from "redux-saga/effects";
import {
  CLEAR_STRINGS_REQUEST,
  clearStrings,
  SET_STRINGS,
  SET_USER,
  setStrings,
  setUser,
} from "./actions/actions.ts";

function* clearStringsSaga() {
  try {
    yield put(clearStrings());
  } catch (e) {
    console.error(e);
  }
}

function* setUserSaga(action) {
  const { login, password } = action.payload;
  try {
    yield put(setUser(login, password));
  } catch (e) {
    console.error(e);
  }
}

function* setStringsSaga(action) {
  const { strings } = action.payload;
  try {
    yield put(setStrings(strings));
  } catch (e) {
    console.error(e);
  }
}


//@comment u don't need rootSaga and root. U can do all in one of then
// in bigger project u will have a lot of files with saga. 
// Every saga  has watcher and worker. U can add that prefix to naming. F.e. setUserSaga => userSagaWorker
// and try to divide logic for saga. Because now u have all sagas in one file.
function* rootSaga() {
  yield takeEvery(SET_USER, setUserSaga);
  yield takeEvery(CLEAR_STRINGS_REQUEST, clearStringsSaga);
  yield takeEvery(SET_STRINGS, setStringsSaga);
}

function* root() {
  //@comment:  yield all([
  // takeEvery(SET_USER, setUserSaga),
  // ....
  // ])
  yield all([rootSaga]);
}

export default root;
