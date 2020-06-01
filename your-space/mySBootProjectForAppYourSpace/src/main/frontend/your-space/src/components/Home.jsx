import React from 'react';
import { Card } from 'react-bootstrap';
import Navigation from './Navigation';
import QuotesGenerator from './QuotesGenerator';
import '../styles/Home.css';


const Home = (props) => {
    return (
        <div className="">
            <Navigation />
            <Card border="warning" style={{ width: '85%', margin: '60px auto' }}>
                <Card.Header style={{ textAlign: 'center' }}><h1 className="user-greeting">Welcome {props.userDisplayName}</h1></Card.Header>
                <Card.Body>
                    <Card.Title className="user-greeting">About "YourSpace"</Card.Title>
                    <Card.Text className="about">
                        Capture documents and notes quickly and organize them however you want, no matter where you are.
                    </Card.Text>
                    <Card.Text className="about">
                        YourSpace remembers it all so you don’t have to.
                    </Card.Text>
                    <Card.Text className="about">
                        Whether it’s to-do’s or your next big idea, YourSpace makes it easy to add and find later.
                    </Card.Text>
                    <Card.Text className="about">
                        Enjoy!
                    </Card.Text>
                    <QuotesGenerator />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;

