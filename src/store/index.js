import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'
import membershipReducer from './membership'
import menuRegisteringReducer from "./menuRegisteringSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        menuRegistering: menuRegisteringReducer,
        membership: membershipReducer
    },
})
