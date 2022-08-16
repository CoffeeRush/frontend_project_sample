import { createSlice } from '@reduxjs/toolkit/';

export const initialState = {
    allIds: []
};

const pet = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        fetchPetsRequest: (state) => {
            state.allIds = [];
        },
        fetchPetsSuccess: (state, action) => {
            state.allIds = action.payload.allIds;
        },
        fetchPetsFailure:() => {},
        resetPets: (state) => {
            state.allIds = [];
        },
    }
});

export const {
    fetchPetsRequest,
    fetchPetsSuccess,
    fetchPetsFailure,
    resetPets
} = pet.actions;

export default pet.reducer;