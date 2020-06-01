import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import Navigation from './Navigation';

class DocumentEdit extends Component {

    emptyItem = {
        title: '',
        subTitle: '',
        url: '',
        createdBy: '',
        description: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const group = await (await fetch(`/documents_api/v1/documents/${this.props.match.params.id}`)).json();
            this.setState({ item: group });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch((item.id) ? (`/documents_api/v1/documents/${item.id}`) : (`/documents_api/v1/documents`), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        // What it does is it pushes a new entry into the history stack - aka redirecting the user to another route.
        this.props.history.push('/documents');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Edit Document' : 'Add New Document'}</h2>;

        return <div>
            <Navigation />
            <Container style={{ width: '70%', margin: '20px auto' }}>
                {title}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup fluid="true">
                        <Form.Label htmlFor="title">Title: </Form.Label>
                        <Form.Control type="text" name="title" id="title" value={item.title || ''}
                            onChange={this.handleChange} autoComplete="title" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="subTitle">Sub Title: </Form.Label>
                        <Form.Control type="text" name="subTitle" id="subTitle" value={item.subTitle || ''}
                            onChange={this.handleChange} autoComplete="subTitle" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="url">URL: </Form.Label>
                        <Form.Control type="text" name="url" id="url" value={item.url || ''}
                            onChange={this.handleChange} autoComplete="url" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="createdBy">Added/Updated By: </Form.Label>
                        <Form.Control type="text" name="createdBy" id="url" value={item.createdBy || ''}
                            onChange={this.handleChange} autoComplete="createdBy" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="description">Description: </Form.Label>
                        <Form.Control as="textarea" type="text" name="description" id="description" value={item.description || ''}
                            onChange={this.handleChange} autoComplete="description" />
                    </FormGroup>

                    <FormGroup>
                        <Button variant="primary" type="submit">Save</Button>{' '}
                        <Link to="/documents">
                            <Button variant="secondary" tag={Link} to="/documents">Cancel</Button>
                        </Link>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(DocumentEdit);

