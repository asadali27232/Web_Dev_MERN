import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
    let token = null

    const submit = (event) => {
        event.preventDefault()
        axios
            .post("http://localhost:5000/user/login", {
                email,
                password,
            })
            .then((response) => {
                token = response.data.authToken
                alert(token)
                setEmail("")
                setPassword("")
                getDetail(token)
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    alert(error.response.data.message)
                } else {
                    alert(error)
                }
            })
    }
    const getDetail = (token) => {
        axios
            .post(
                "http://localhost:5000/user/userdetail",
                {},
                {
                    headers: { "auth-token": token },
                }
            )
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                alert(`ERROR -> ${error}`)
            })
    }
    return (
        <>
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
            <h2 className="my-3">User Detail</h2>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Date Joined: {user.date}</p>
        </>
    )
}

export default Login
