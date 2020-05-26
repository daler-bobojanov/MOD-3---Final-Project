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
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure you want to delete?
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Confirm your selection</h4>
                <p>This action can not be undone.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.deleteYes} variant="danger" size="lg">Yes</Button>
                <Button onClick={props.onHide} size="lg">No</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteModal;