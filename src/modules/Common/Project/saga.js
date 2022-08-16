import { takeLatest, put, call, select } from 'redux-saga/effects';
import { AccessToken } from './api';
import { fetchAccessTokenRequest, fetchAccessTokenFailure, fetchAccessTokenSuccess } from './slice';

function* loadAccessToken(payload){
    try {
        const response = yield call(AccessToken.get, payload);
        yield put(fetchAccessTokenSuccess({accessToken: response.data.access_token}));
    } catch(error) {
        console.log(error);
        yield put(fetchAccessTokenFailure(error.message));
    }
}

export default function* projectSaga() {
    yield takeLatest(fetchAccessTokenRequest.type, loadAccessToken);
}
