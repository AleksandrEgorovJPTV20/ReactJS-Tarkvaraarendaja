import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function Registration() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/registers`, {
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                email: email,
            });
            navigate('/register');
            setMsg("Успешно зарагестрировались на проффессию");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <section id="about" className="about" style={{marginTop: "100px"}}>
            <div className="container" data-aos="fade-up">
                <div className="row gx-0" style={{display: "flex", justifyContent: "center"}}>
                        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <Form onSubmit={Register} className="content" style={{textAlign: "center", margin: "auto", width: "70%"}} >
                                    <h3>Programmer</h3>
                                    <h2>Registration</h2>
                                    <h3>{msg}</h3>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="text" placeholder="Enter firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="text" placeholder="Enter lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="phone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} reqiored/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type ="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    </Form.Group>
                                    <div className="text-center text-lg-start" style={{display: "flex", justifyContent: "center"}}>
                                        <Button variant="primary" type="submit" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">Register</Button>
                                    </div>
                                </Form>
                        </div>
                </div>
            </div>
        </section>
    )
}