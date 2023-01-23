import React from 'react';
import './App.css';
import * as ReactRouterDom from 'react-router-dom'

import Register from "./user/Register";
import Login from "./user/Login";

function App() {
    return (
        <>
            <ReactRouterDom.BrowserRouter>
                <ReactRouterDom.Routes>
                    <ReactRouterDom.Route path="/register" element={<Register/>}/>
                    <ReactRouterDom.Route path="/login" element={<Login/>}/>
                </ReactRouterDom.Routes>
            </ReactRouterDom.BrowserRouter>
        </>
    );
}

export default App;
