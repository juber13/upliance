import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        formData: JSON.parse(localStorage.getItem('userData')) || null,
        counter: 0
    },

    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },

        increament: (state) => {
            return state.counter += 1;
        },

        decreament: (state) => {
            return state.counter -= 1;
        },

        reset: (state) => {
            return state.counter = 0;
        },

        getDataFromLocalStorage: () => {
            return localStorage.getItem('userData');
        }

    }
});

export const { setFormData } = userSlice.actions;
export default userSlice.reducer;