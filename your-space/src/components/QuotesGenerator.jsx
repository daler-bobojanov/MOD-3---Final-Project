import React from 'react';
import { Card, Button } from 'react-bootstrap';


class QuotesGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            quote: 'Stephen Hawking - "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious."'
        }
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    // to join key/value pairs into one String
    getFullQuote = (item) => {
        let fullQuote = [item.author, item.text].join(' - "') + '" ';
        return fullQuote;
    }

    // generates random quotes 
    randomizer() {
        let x = this.state.data.map(this.getFullQuote);
        return x[Math.floor(Math.random() * x.length)];
    }

    onChange = () => {
        this.setState({ quote: this.randomizer() })
    }

    render() {
        // console.log(this.state.quote, 'return')
        return (
            <Card border="warning">
                <Card.Header style={{ fontSize: '1.2em' }}>Today's Inspirational Quote:</Card.Header>
                <Card.Body>
                    <Card.Title style={{ fontStyle: 'italic' }}>
                        {this.state.quote}
                    </Card.Title>
                    <Card.Text >

                    </Card.Text>
                    <Button variant="outline-primary" onClick={this.onChange} style={{ float: 'right' }}>Want more? Click me!</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default QuotesGenerator;