import { all, fork } from 'redux-saga/effects';

import projectSaga from '../modules/Common/Project/saga';
import petSaga from '../modules/Pet/saga';

export default function* root() {
    yield all([
        fork(projectSaga),
        fork(petSaga)
    ]);
}