import React, { useCallback } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';
import { ReactComponent as SelectButton } from './img/Vector 30.svg';
import { ReactComponent as DeleteButton } from "./img/Group 8.svg";
import { useRef, useState } from "react";

import './aa/SideBar'
import SideBar from "./aa/SideBar";

function App() {
    return (
        <BrowserRouter>
            <Head />
            <HeadBorderStyled />
            <Routes>
                <Route path='/regist1' element={<Regist1 />} />
                <Route path='/regist2' element={<Regist2 />} />
                <Route path='/regist3' element={<Regist3 />} />
                <Route path='/modify1' element={<Modify1 />} />
            </Routes>
            <Foot />
        </BrowserRouter>
    );
}

export default App;
