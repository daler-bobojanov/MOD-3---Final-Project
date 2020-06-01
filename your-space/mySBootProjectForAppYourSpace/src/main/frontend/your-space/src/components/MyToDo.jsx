import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import gif from '../assets/underconstruction.gif';


const MyToDo = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Container style={{ width: '40%', margin: '0 auto' }}>
                <img src={gif} alt="under-construction" />
            </Container>
        </React.Fragment>
    );
}

export default MyToDo;