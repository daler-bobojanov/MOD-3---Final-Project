import React from 'react';
import '../styles/LandingPage.css';

// import logo from '../../logo.svg';
// import '../../App.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        // get mouse position
        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 80) * (canvas.width / 80)
        }

        // to get current mouse position
        window.addEventListener('mousemove',
            function (event) {
                mouse.x = event.x;
                mouse.y = event.y;
            }
        );

        // create particle
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            // method to draw individual particle
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                // particle color
                // orange
                // ctx.fillStyle = '#8C5523';
                // ligh-orange
                // ctx.fillStyle = '#fed8b1';
                // white
                ctx.fillStyle = '#FFFFFF';
                // black
                // ctx.fillStyle = '#000000';

                ctx.fill();
            }
            // check particle position, check mouse position, move the particle, draw the particle
            update() {
                // check if particle is still within canvas
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // check collission detection -> mouse position / particle position
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 10;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 10;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 10;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 10;
                    }
                }
                // move particle
                this.x += this.directionX;
                this.y += this.directionY;
                // draw particle
                this.draw();
            }
        }

        // create randomized particle and push to array
        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles * 0.6; i++) {
                let size = (Math.random() * 4) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 5) - 2.5;
                let directionY = (Math.random() * 5) - 2.5;
                let color = '';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // check if particles are close enough to draw line between them
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        // lines color
                        // orange
                        // ctx.strokeStyle = 'rgba(140, 85, 31,' + opacityValue + ')';
                        // light-blue
                        ctx.strokeStyle = 'rgb(83, 210, 249, ' + opacityValue + ')';
                        // white
                        // ctx.strokeStyle = 'rgb(255, 255, 255, ' + opacityValue + ')';
                        // black
                        // ctx.strokeStyle = 'rgb(0, 0, 0, ' + opacityValue + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // animation loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        // window resize event to redistribute particles randomly based on window resize
        window.addEventListener('resize',
            function () {
                canvas.width = this.innerWidth;
                canvas.height = this.innerHeight;
                mouse.radius = ((canvas.height / 80) * (canvas.width / 80));
                init();
            }
        );

        // mouse out event to reset mouse coordinates
        window.addEventListener('mouseout',
            function () {
                mouse.x = undefined;
                mouse.y = undefined;
            }
        );

        init();
        animate();
    }

    render() {
        return (
            <div className="App">
                <canvas ref={this.canvasRef} id="canvas1" />
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>

        );
    }
}

export default LandingPage;