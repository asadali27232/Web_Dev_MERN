import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import SignUp from "./SignUp"
import "./App.css"

function App() {
    return (
        <div className="container pt-20">
            <div className="row ">
                <div className="col-6 p-5">
                    <Login />
                </div>
                <div className="col-6 p-5">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}

export default App
