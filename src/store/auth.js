import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

// authenticated : 현재 로그인 여부를 간단히 확인하기 위해 선언
// accessToken : Token 저장
// expireTime : Token 의 만료 시간
// SET_TOKEN : Token 정보를 저장
// DELETE_TOKEN : 값을 모두 초기화함으로써 Token에 대한 정보도 삭제
// name : 유저의 성명
// storeName : 가게 이름
// firstLogin : 최초 로그인 여부 (가게 등록 여부) -> 1:가게 등록 X, 0: 가게 등록 O
// menuRegister : 메뉴 등록 여부 -> 1:메뉴 등록 X, 0: 메뉴 등록 O


const initialStateValue = {
    authenticated: false,
    accessToken: null,
    expireTime: null,
    name: "",
    storeName: "",
    firstLogin: 1,
    menuRegister: 1,
    storeStatus: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState: { value: initialStateValue},
    reducers: {
        SET_AUTH: (state, action) => {
            state.value = action.payload;
        },
        DELETE_AUTH: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const TOKEN_TIME_OUT = 600 * 1000;
export const { SET_AUTH, DELETE_AUTH } = authSlice.actions;
export default authSlice.reducer;


export const getFirstLogin = () => {
    const firstLogin = localStorage.getItem('firstLogin')
    console.log(typeof firstLogin)
    return firstLogin
}

export const getMenuRegister = () => {
    const menuRegister = localStorage.getItem('menuRegister')
    console.log(typeof menuRegister)

    return menuRegister
}

export const getStoreStatus = () => {
    const storeStatus = localStorage.getItem('storeStatus')
    console.log(typeof storeStatus)

    return storeStatus
}

//관리자 페이지갈때
export const checkAdmin = () => {
    const firstLogin = getFirstLogin()
    const menuRegister = getFirstLogin()
    const result = firstLogin === "99" && menuRegister === "99"
    if(result === false){
        alert('올바르지 않은 권한 접근입니다.')
        return redirect('/')
    }
    return null
}

//가게등록하고 승인 안날때 -> 가게등록화면 허용
export const checkRegisterStore = () => {
    const firstLogin = getFirstLogin()
    const menuRegister = getMenuRegister()
    const storeStaute = getStoreStatus()
    const result = firstLogin === "1" && menuRegister === "1" && storeStaute === "null"
    if(!result){
        alert('올바르지 않은 권한 접근입니다.')
        return redirect('/')
    }
    return null
}

//메뉴 등록화면 이동시
export const checkRegisterMenu = () => {
    const firstLogin = getFirstLogin()
    const menuRegister = getMenuRegister()
    const storeStaute = getStoreStatus()
    const result = firstLogin === "1" && menuRegister === "1" && storeStaute === "A"
    if(!result){
        alert('올바르지 않은 권한 접근입니다.')
        return redirect('/')
    }
    return null
}

//메인페이지 이동시
export const checkTodayPage = () => {
    const firstLogin = getFirstLogin()
    const menuRegister = getMenuRegister()
    const storeStaute = getStoreStatus()
    const result = firstLogin === "0" && menuRegister === "0" && storeStaute === "A"
    if(!result){
        alert('올바르지 않은 권한 접근입니다.')
        return redirect('/')
    }
    return null
}
