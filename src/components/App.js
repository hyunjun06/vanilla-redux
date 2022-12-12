import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;