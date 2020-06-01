import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Spinner, Button, ButtonGroup, Container } from 'react-bootstrap';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Navigation from './Navigation';
import ConfirmDeleteModal from './ConfirmDeleteModal';



class DocumentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            isLoading: true,
            modalShow: false,
        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/documents_api/v1/documents')
            .then(response => response.json())
            .then(data => this.setState({ documents: data, isLoading: false }));

    }

    showModal = () => {
        this.setState({ modalShow: true })
    }

    async remove(id) {

        await fetch(`/documents_api/v1/document/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedDocuments = [...this.state.documents].filter(i => i.id !== id);
            this.setState({ documents: updatedDocuments, modalShow: false });
        });
    }


    render() {
        const { documents, isLoading } = this.state;

        if (isLoading) {
            return <div style={{ width: '2.5%', margin: '250px auto' }}><Spinner animation="grow" variant="warning" style={{ margin: '0 auto', border: '1px red solid' }} /></div>;
        }

        const documentList = documents.map(document => {
            // to convert timestamp to human readable format
            const createDate = new Date(document.createDate).toLocaleString();
            const updateDate = new Date(document.updateDate).toLocaleString();

            return <Card border="dark" style={{ width: '90%', margin: '40px auto' }} key={document.id}>
                <Card.Body>
                    <Card.Title><h3>{document.title}</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{document.subTitle}</Card.Subtitle>
                    <Card.Link href={document.url} className="mb-2" target="_blank">{document.url}</Card.Link>
                    <br /><br />
                    <Card.Subtitle className="mb-4 text-muted">Created By: <h4>{document.createdBy}</h4></Card.Subtitle>
                    {/* <br /> */}
                    <Card.Subtitle className="mb-1 text-muted">Date Created: {createDate} (Eastern Daylight Time)</Card.Subtitle>
                    {/* <br /> */}
                    <Card.Subtitle className="mb-1 text-muted">Last Updated: {updateDate} (Eastern Daylight Time)</Card.Subtitle>
                    <hr />
                    <Card.Text style={{ fontSize: '1.5em' }}>
                        {document.description}
                    </Card.Text>
                    <ButtonGroup>
                        <Link to={"/documents/" + document.id}>
                            <Button type='button' size="sm" variant="primary" tag={Link} to={"/documents/" + document.id}>Edit</Button>
                        </Link>
                        {/* <Button size="sm" variant="danger" onClick={() => this.remove(document.id)}>Delete</Button> */}
                        <Button size="sm" variant="danger" onClick={this.showModal}>Delete</Button>
                    </ButtonGroup>
                    <ConfirmDeleteModal
                        show={this.state.modalShow}
                        abort={() => this.setState({ modalShow: false })}
                        confirm={() => this.remove(document.id)}
                    />
                </Card.Body>
            </Card>
        });

        return (
            <div>
                <Navigation />
                <Container fluid style={{ textAlign: 'start', margin: '20px auto', width: '90%' }}>
                    <div className="float-right">
                        <Link to={"/documents/new"}>
                            <Button variant="info" tag={Link} to={"/documents/new"}>Add New Document</Button>
                        </Link>
                    </div>
                    <h3 id="documentlist">Documents List</h3>
                </Container>
                {documentList}
                <ScrollUpButton />
            </div>
        );
    }
}

export default DocumentList;