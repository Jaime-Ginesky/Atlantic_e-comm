// import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createSlice } from '@reduxjs/toolkit';

// export const CATEGORIES_INITIAL_STATE = {
//     categories: [],
// };

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesArray: [],
    },
    // initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

