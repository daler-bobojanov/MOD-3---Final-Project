import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ConfirmDeleteModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={props.abort}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h5>Are you sure you want to delete this record?</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Confirm your selection</h4>
                <p><span>&#9888;</span>This action can not be undone</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.confirm} variant="danger" size="lg" style={{ width: '20%', margin: '0 auto' }}>Yes</Button>
                <Button onClick={props.abort} size="lg" style={{ width: '20%', margin: '0 auto' }}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteModal;

