import { createSelector } from '@reduxjs/toolkit';

export const selectProject = (state) => state.project;

export const selectAccessToken = createSelector(
    [selectProject],
    (project) => project.accessToken
)