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
                    <p>2023 &copy; Copyright, Made by PROFAdvert. All Rights Reserved.</p>
                </Container>
            </footer>
        )
    }
}