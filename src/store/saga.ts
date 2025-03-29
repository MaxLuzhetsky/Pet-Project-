// import { put, takeEvery } from 'redux-saga/effects';
// import { CLEAR_STRINGS_REQUEST, clearStrings , SET_USER, setUser } from './actions/actions.ts';

// function* clearStringsSaga() {
//   try {
//     yield put(clearStrings());
//   } catch (e) {
//     console.error(e);
//   }
// }

// function* setUserSaga(action) {
//   console.log(action.payload)
//   const { login, password } = action.payload;
//   try {
//     yield put(setUser(login, password));
//   } catch (e) {
//     console.error(e);
//   }
// }

// function* rootSaga() {
//   yield takeEvery(SET_USER, setUserSaga);
//   yield takeEvery(CLEAR_STRINGS_REQUEST,clearStringsSaga)
// }


// export default rootSaga;