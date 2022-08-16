import { createSelector } from '@reduxjs/toolkit';

export const selectPetIds = (state) => state.pet.allIds;

export const selectPets = createSelector(
    [selectPetIds],
    (pets, petIds) => petIds.map((id) => pets[id])
);
