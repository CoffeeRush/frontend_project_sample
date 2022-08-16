import { takeLatest, put, call, select } from 'redux-saga/effects';
import { selectAccessToken } from '../Common/Project/selectors';
import { Pets } from './api';
import { fetchPetsFailure, fetchPetsRequest, fetchPetsSuccess } from './slice';

function* fetchPets(){
    try {
        const accessToken = yield select(selectAccessToken);
        const response = yield call(Pets.get, accessToken);
        yield put(fetchPetsSuccess({allIds: response.data.animals}));
    } catch(error) {
        console.log(error);
        yield put(fetchPetsFailure(error.message));
    }
}

export default function* petSaga() {
    yield takeLatest(fetchPetsRequest.type, fetchPets);
}

