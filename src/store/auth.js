import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { jwt: '', name: '', firstLogin: 1, menuRegister: 1 }

export const authSlice = createSlice({
    name: "auth",
    initialState: { value: { jwt: '', name: '', firstLogin: 1, menuRegister: 1 } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;