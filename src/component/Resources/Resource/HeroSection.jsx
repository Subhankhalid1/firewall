import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";

const HeroSection = () => {
    return <>
        <div className="support-main">
            <Row className="container mx-auto row-faq row-resource">
                <Col lg={6} md={7} className="d-flex flex-column justify-content-center" >
                    <h3 className="text-white text-uppercase h1">our resources</h3>
                    <div className="justify">
                        <span className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Consequuntur, possimus doloremque. Expedita ab doloremque ratione esse
                        nesciunt in, numquam officia accusamus veritatis labore maxime tempora ullam?
                        </span>
                    </div>
                    <br />
                </Col>
                <Col lg={6} md={5} className="row-faq d-flex justify-content-center align-items-center">
                    <img className="w-100 faq-img req-image" src="https://img.pngio.com/computer-networking-png-1-png-image-computer-networking-png-500_280.png" alt="" />
                </Col>
            </Row>
        </div>
        <section className="text-center bygga-parent py-4">
            <span className="back-border bygga-text-heading fs-4 fw-bold text-muted text-capitalize">Resurser</span>
            <div className="mx-auto mt-1 text-of-heading">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sint sunt quas dignissimos nesciunt perferendis architecto,
                </p>
            </div>
        </section>
    </>
}

export default HeroSection;