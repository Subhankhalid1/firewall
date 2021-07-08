

import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
    return <>
        <div className="support-main bg-dark">
            <Row className="container mx-auto row-faq row-resource">
                <Col lg={6} md={7} className="d-flex flex-column justify-content-center" >
                    <h3 className="text-white text-uppercase h1">GET IN TOUCH</h3>
                    <div className="justify">
                        <span className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Consequuntur, possimus doloremque. Expedita ab doloremque ratione esse
                        nesciunt in, numquam officia accusamus veritatis labore maxime tempora ullam?
                        </span>
                    </div>
                    <div>

                        <button type="button" class="btn btn-primary btn-lg">Contact us</button>
                    </div>
                    <br />
                </Col>
                <Col lg={6} md={5} className="row-faq d-flex justify-content-center align-items-center">
                    <img className="logo faq-img req-image" src="https://i.pinimg.com/originals/3b/0d/9c/3b0d9cfc1619ffd953fb44f43fd3b9c4.png" alt="" />
                </Col>
            </Row>
        </div>

    </>
}

export default HeroSection;