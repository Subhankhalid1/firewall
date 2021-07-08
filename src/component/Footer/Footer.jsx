import React from 'react';
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {

    return (
        <div className="footer-container py-4">
            <div className="container py-2">
                <Row>
                    <Col className="px-3" lg={4} md={6} sm={12}>
                        <section className="d-flex align-items-center">
                            <img style={{ width: "15%" }} src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" />
                            <span className="text-danger h2 mx-2 fw-light">Firewall<span className="text-white h2 fw-light">Force</span></span>
                        </section>
                        <section className="py-3">
                            <span className="text-white font-size">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Hic, earum nulla est veritatis alias non aperiam dolor
                                asperiores
                            </span>
                            <div className="py-2">
                                <i className="fa text-white mx-3 fa-instagram" aria-hidden="true"></i>
                                <i className="fa text-white mx-3 fa-twitter" aria-hidden="true"></i>
                                <i className="fa text-white mx-3 fa-facebook" aria-hidden="true"></i>
                            </div>
                            <span className="text-white font-size">
                                Copyright &copy; 2021 All Right Reserved
                            </span>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span className="text-white font-size h2 fw-light">Snabblankar</span>
                            <div className="fw-light py-5 footer-padding-comp font-size text-white d-flex flex-column">
                                <span>Contact Us</span>
                                <span>Odering & Payment</span>
                                <span>Shipping</span>
                                <span>Returns</span>
                                <span>FAQ</span>
                            </div>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={2} md={3} sm={6}>
                        <section className="mt-4">
                            <span className="text-white font-size h2 fw-light">Information</span>
                            <div className="fw-light footer-padding-comp py-5 font-size text-white d-flex flex-column">
                                <span>About Us</span>
                                <span>Work With Us</span>
                                <span>Privacy Policy</span>
                                <span>Terms & Conditions</span>
                                <span>Press Enquiries</span>
                            </div>
                        </section>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="last-col-footer">
                        <section className="py-3 h-100 d-flex flex-column justify-content-center align-items-center">
                            <span className="text-white h5">Subscribe to our Newsletter</span>
                            <input type="email" className="p-2 input-footer mt-2" placeholder="email" />
                            <button className="btn btn-danger btn-footer mt-3 py-2">Subscribe</button>
                        </section>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Footer;