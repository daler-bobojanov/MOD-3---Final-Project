import React from 'react';
import { Card } from 'react-bootstrap';
import Navigation from './Navigation';
import '../styles/Home.css';


const Home = (props) => {
    return (
        <div className="">
            <Navigation />
            <Card border="warning" style={{ width: '80%', margin: '60px auto' }}>
                <Card.Header style={{ textAlign: 'center' }}><h1 className="user-greeting">Welcome {props.userDisplayName}</h1></Card.Header>
                <Card.Body>
                    <Card.Title className="user-greeting">About Us</Card.Title>
                    <Card.Text className="user-greeting">
                        
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas rem non recusandae ut ratione omnis quia esse molestiae itaque, voluptates eius, laboriosam aliquid? Nam odit itaque velit sint eligendi, iure dolores sequi obcaecati, sit placeat mollitia nemo doloribus amet quasi esse delectus minus. Eligendi mollitia est necessitatibus, enim iusto impedit voluptate! Corrupti inventore ipsa, veniam neque esse quaerat ducimus, dolore amet reprehenderit quasi repellendus unde modi in harum tempora vero tempore nihil nesciunt atque consequatur voluptatem enim consectetur reiciendis. Saepe vitae laborum soluta voluptatibus tenetur, repellat dolores ab iste pariatur, minus, minima nihil quas ipsa nulla quibusdam. Consequatur hic, voluptatibus corrupti voluptates perspiciatis harum minima sint ratione est quia recusandae quas eveniet voluptatem totam reiciendis fugiat. Nemo obcaecati blanditiis veniam nesciunt ipsa nisi distinctio laboriosam beatae minus provident, repellat quos quae accusamus enim eveniet dicta totam? Quas sed ab id earum optio modi dolor fugit eveniet omnis, iure repellendus. Rem et nam architecto provident facilis, molestiae consequatur eum reprehenderit! Quos alias maiores quod culpa, iusto qui veritatis, tenetur perferendis iure et, rerum sunt necessitatibus molestias! Excepturi assumenda harum sint maxime hic repudiandae! Esse est veritatis laboriosam dignissimos assumenda blanditiis consectetur, vitae perferendis ea deleniti molestiae facere natus quidem quo corrupti architecto incidunt odit dolor iure asperiores repudiandae omnis adipisci ipsam cumque!
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;

