import {configureStore, createSlice} from '@reduxjs/toolkit';


const menuRegisteringSlice = createSlice({
    name: 'menuRegisteringSlice',
    initialState: {},
    reducers: {
        registMenuInfo : (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        registOriginInfo : (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

const {actions, reducer} = menuRegisteringSlice;

export const { registMenuInfo, registOriginInfo } = actions;

const store = configureStore({
    reducer: {
        menu: reducer,
    },
});

export default store;