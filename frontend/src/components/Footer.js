import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
    render(){
        return (
            <footer id="footer" className="footer">
                <Container
                    className="text-center"
                    fluid
                >
                    <p>&copy; Copyright PROFAdvert. All Rights Reserved</p>
                </Container>
            </footer>
        )
    }
}