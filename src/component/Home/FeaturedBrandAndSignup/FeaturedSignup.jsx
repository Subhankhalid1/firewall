import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./Featured.css";

const FeaturedSignup = () => {
    return (
        <div className="my-5">
            <section className="container">
                <Row>
                    <Col lg={8} className="text-center">
                        <span className="text-muted h4" style={{ borderBottom: "3px solid #dc3545" }}>Featured Brands</span>
                        <div className="brand-img-div my-1"></div>
                    </Col>
                    <Col className="text-center py-3 back-color" lg={4}>
                        <div className="h-100 py-3 bg-white">
                            <div className="d-flex justify-content-around mb-5">
                                <span className="account-active account">Login</span>
                                <span className="account">Signup</span>
                            </div>
                            <div className="d-flex flex-column py-4 px-4 account-container">
                                <input className="input-account my-2" placeholder="email" type="email" />
                                <input className="input-account my-2" placeholder="password" type="password" />
                                <div className="d-flex text-muted font-smaller justify-content-end">
                                    <small>Forget Password</small>
                                </div>
                                <button className="btn btn-danger mt-3 py-2">Login</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default FeaturedSignup;
