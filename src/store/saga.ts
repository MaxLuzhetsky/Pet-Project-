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

function* rootSaga() {
  yield takeEvery(SET_USER, setUserSaga);
  yield takeEvery(CLEAR_STRINGS_REQUEST, clearStringsSaga);
  yield takeEvery(SET_STRINGS, setStringsSaga);
}

function* root() {
  yield all([rootSaga]);
}

export default root;
