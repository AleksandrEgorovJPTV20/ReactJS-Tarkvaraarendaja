import React from 'react';
import axios from 'axios';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';

export default function UsersList() {
    const [registeredUser, setRegisteredUser] = React.useState([]);

    const getRegisteredUsers = async () => {
        const response = await axios.get(`http://localhost:5000/registers`);
        setRegisteredUser(response.data);
    };
    const deleteRegister = async (id) => {
        if (window.confirm('Delete record #' + id + ' ?')) {
            await axios.delete(`http://localhost:5000/registers/${id}`);
            getRegisteredUsers();
        }
    };
    React.useEffect(() => {
        getRegisteredUsers();
    }, []);
    return (
        <Container style={{marginTop: "15%"}}>
            <h2 className="text-center mt-3">Registered Users List</h2>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={8} lg={8} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <table className="table is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {registeredUser.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}. #{user.id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>  
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td><Button onClick={() => deleteRegister(user.id)} variant="danger">
                                            Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <p style={{textAlign: 'right'}}>Registered users - {registeredUser.length}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}