import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (event) => {
        event.preventDefault()
        alert(`${email} and ${password}`)
        axios
            .post("http://localhost:5000/user/login", {
                email,
                password,
            })
            .then((response) => {
                console.log(response)
                setEmail("")
                setPassword("")
            })
            .catch((error) => {
                alert(`ERROR -> ${error}`)
            })
    }
    return (
        <Form onSubmit={submit}>
            <h2>Login to Server</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login
