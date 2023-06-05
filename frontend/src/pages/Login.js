import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/users/login` ,{
                email: email,
                password: password,
            });
            navigate('/');
            window.location.reload();
        } catch(error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <section id="login" className="about" style={{marginTop: "15%"}}>
            <div className="container" data-aos="fade-up">
                <div className="row gx-0" style={{display: "flex", justifyContent: "center"}}>
                        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <Form onSubmit={Auth} className="content" style={{textAlign: "center", margin: "auto", width: "70%"}} >
                                    <h3>Programmer</h3>
                                    <h2>Login</h2>
                                    <h3>{msg}</h3>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <div className="text-center text-lg-start" style={{display: "flex", justifyContent: "center"}}>
                                        <Button variant="primary" type="submit" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">Login</Button>
                                    </div>
                                </Form>
                        </div>
                </div>
            </div>
        </section>
    )
}