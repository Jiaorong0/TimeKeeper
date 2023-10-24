import React from "react"
import Preview from "./pages/Preview"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"

export default function App() {

    return(
        <div>
            <Header />
            <Routes>
                <Route path={"/Preview"}  element={<Preview />} />
                <Route path={"/"} element={<Main />} />
                <Route path={"/Login"} element={<Login />} />
                <Route path={"/Register"} element={< Register />} />
            </Routes>
            <Footer />
        </div>
    )
}