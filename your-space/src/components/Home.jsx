import React from 'react';
import { Card } from 'react-bootstrap';
import Navigation from './Navigation';


const Home = (props) => {



    return (

        <div className="">
            <Navigation />
            {/* <div><h2>Welcome {props.userDisplayName}</h2></div> */}
            <Card border="dark" style={{ width: '80%', margin: '60px auto' }}>
                <Card.Header style={{ textAlign: 'center' }}><h2>Welcome {props.userDisplayName}</h2></Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cumque neque dolor sint asperiores magni tempore voluptas, velit architecto ut sed voluptates libero at debitis perspiciatis? Culpa eos sapiente voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque voluptas neque hic, odit eius praesentium incidunt. Aperiam, sit vitae fugiat perferendis consequatur architecto quae ducimus voluptates enim dolores ab. Culpa quisquam nostrum autem velit harum quasi officia, necessitatibus pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae accusamus voluptas saepe ipsum vero sed alias. Fuga animi molestias libero eos, fugiat corrupti vitae ab assumenda? Neque nisi veniam cupiditate, possimus reprehenderit illum, nulla provident voluptate temporibus quaerat minima? Placeat esse dicta numquam ex corrupti, vel sit explicabo fugiat aliquam perferendis a unde necessitatibus autem dolore sint dignissimos laborum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam molestias fugit aspernatur, eaque amet consequatur libero beatae tempora minus non pariatur esse quidem dolore saepe temporibus dolorum harum ipsum suscipit eius vitae quia eveniet! Sint commodi, accusantium ratione ipsa possimus voluptatibus rem nam aliquid maxime aut exercitationem a reprehenderit aliquam recusandae quae? Est quos rem accusamus, similique animi sint quod. Quo aut odit doloribus, illo dicta vel, eum libero ducimus sed explicabo quidem, eaque ullam animi ea perspiciatis nihil totam.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;

