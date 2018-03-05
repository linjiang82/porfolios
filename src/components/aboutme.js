import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../logo.svg';
import badminton from '../img/badminton.jpg';
import music from '../img/music.jpg';
import coder from '../img/coder.jpg';
import photographer from '../img/photographer.jpg';
import './aboutme.css';

class Aboutme extends Component {
    render(){
        return (
            <div id='aboutme' >
            <h3>About Me</h3>
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={coder} className="inlineBlock"/>
                    <Carousel.Caption>
                    <h3>A Coder</h3>
                    <p>I am enthusiastic at programming.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={photographer} className="inlineBlock"/>
                    <Carousel.Caption>
                    <h3>An amature photographer</h3>
                    <p>I love photographing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={music} className="inlineBlock"/>
                    <Carousel.Caption>
                    <h3>A music fan</h3>
                    <p>Music is part of my life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={badminton} className="inlineBlock"/>
                    <Carousel.Caption>
                    <h3>A badminton lover</h3>
                    <p>Badminton is my favourite sport.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default Aboutme;
