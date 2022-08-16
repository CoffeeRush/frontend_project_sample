import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import createSagaMiddleware from "@redux-saga/core";

import projectReducer from '../modules/Common/Project/slice';
import petReducer from '../modules/Pet/slice';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        project: projectReducer,
        pet: petReducer 
    },
    middleware:[thunk, sagaMiddleware] 
});

sagaMiddleware.run(sagas);

export default store;