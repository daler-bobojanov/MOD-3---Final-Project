import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';


const LoginModal = (props) => {

    return (
        <React.Fragment>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" size="sm">
                        "YourSpace" - is one place to manage your doc's and tasks..
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <LoginForm />

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default LoginModal;