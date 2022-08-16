import { createSlice } from '@reduxjs/toolkit/';

export const initialState = {
    accessToken: null
};

const project = createSlice({
    name: 'project',
    initialState,
    reducers: {
        fetchAccessTokenRequest: (state) => {
            state.accessToken = null;
        },
        fetchAccessTokenSuccess: (state, action) => {
            state.accessToken = action.payload.accessToken;
        },
        fetchAccessTokenFailure:() => {},
        resetProject: (state) => {
            state.accessToken = null;
        },
    }
});

export const {
    fetchAccessTokenRequest,
    fetchAccessTokenSuccess,
    fetchAccessTokenFailure,
    resetProject
} = project.actions;

export default project.reducer;