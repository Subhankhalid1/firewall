import React from 'react';
import { Row, Col } from "react-bootstrap";
import pic from "./img/m.png";
import "./Methods.css";

const Methods = () => {
    return (
        <div>
            <section className="container">
                <Row>
                    <Col lg={3} md={3}>
                        <span className="text-muted shipping-method h4 back-border">Shipping Methods
                        <i className="fa fa-check-circle text-success mx-2" aria-hidden="true"></i>
                        </span>
                        <div className="mt-3 py-3 px-3 card-height shadow-sm d-flex justify-content-center align-items-center">
                            <img className="w-100" src={pic} alt="" />
                        </div>
                    </Col>
                    <Col className="text-center py-5" lg={5} md={5}>
                        <span className="text-muted shipping-method h4 back-border">Subscribe to Our Newsletter</span>
                        <div className="middle-card mt-3">
                            <div className="overlay d-flex align-items-center">
                                <div className="mx-3 w-100 my-3">
                                    <h6 className="text-uppercase join-network heading-middle fw-bold">join our network today</h6>
                                    <div className="text-center">
                                        <span className="span-join">
                                            Subscribe our news letter and stay<br />
                                            up-to-date with latest promotions,<br />
                                            new product and amazing sales
                                        </span>
                                    </div>
                                    <div className="text-center mt-2">
                                        <input className="input-email" type="email" placeholder="email" /><br />
                                        <button style={{ width: "13rem" }} className="btn mt-2 btn-method btn-danger text-capitalize">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-center" lg={4} md={4}>
                        <span className="text-muted h4 shipping-method back-border">Payment Methods
                        <i className="fa fa-check-circle text-success mx-2" aria-hidden="true"></i>
                        </span>
                        <div className="mt-3 py-3 px-3 card-height shadow-sm d-flex justify-content-center align-items-center">
                            <img className="w-100" src={pic} alt="" />
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Methods;