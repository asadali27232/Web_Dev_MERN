import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import "./SignUp.css"
import axios from "axios"

function SignUp() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const submit = (event) => {
        event.preventDefault()
        alert(`${name} ${email} ${password} ${username} ${phone}`)
        axios
            .post("http://localhost:5000/user/signup", {
                name,
                username,
                email,
                phone,
                password,
            })
            .then((response) => {
                console.log(response)
                setName("")
                setUsername("")
                setEmail("")
                setPhone("")
                setPassword("")
            })
            .catch((error) => {
                alert(`ERROR -> ${error}`)
            })
    }
    return (
        <Form onSubmit={submit}>
            <h2>Sign Up to Server</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
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

export default SignUp
