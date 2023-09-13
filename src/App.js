import React from "react"
import Preview from "./pages/Preview"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Register from "./pages/Register"


export default function App() {
    return(
        <div>
            <Header />
            {/* <Preview /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            <Main />
            <Footer />
        </div>
    )
}