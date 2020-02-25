import React from 'react';
import '../routes/routes.css';
import Carousels from '../carousel/Carousels';

import airpods from '../images/apple-airpods.jpg'
import MusicMemos from '../images/MusicMemos.jpeg'
import GarageBand from '../images/garageband-logo.png'
import LogicProX from '../images/LogicProX.png'
import MainStage3 from '../images/MainStage3.png'

import { 
    Container,
    Row,
    Col
    
} 
from 'react-bootstrap';


function home() {
    return (
        <div>
        <Carousels/>
        <Container className="home-container">
            <Row>
                <Col>
                    <h5>Do you have your Apple <strong>AirPods?</strong></h5>
                    <br></br>
                    <h1>More</h1>
                    <br></br>
                    <h1 className="magical">magical</h1>
                    <br></br>
                    <h1> than ever.</h1>
                    <p>AirPods deliver effortless, all-day audio on the go. And AirPods Pro bring Active Noise Cancellation to an in-ear headphone — with a customisable fit.</p>
                </Col>
                <Col>
                    <img className="apple-air-pods-img" src={airpods} alt="apple airpods"/>
                </Col>             
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <Row className="home-header">
                    <h1>Music apps from Apple</h1>
                    </Row>
                    <Row>
                    <ul className="musicApps">
                        <li>
                            <img src={MusicMemos} alt="Music Memos"/>
                            <h4>Music Memos</h4>
                        </li>
                        <li>
                            <img src={GarageBand} alt="GarageBand"/>
                            <h4>GarageBand</h4>
                        </li>
                        <li>
                            <img src={LogicProX} alt="Logic Pro X"/>
                            <h4>Logic Pro X</h4>
                        </li>
                        <li>
                            <img src={MainStage3} alt="MainStage3"/>
                            <h4>MainStage3</h4>
                        </li>

                    </ul>
                        
                    </Row>
                
                </Col>            
            </Row>
        </Container>
        </div>


 
  );
}


export default home
