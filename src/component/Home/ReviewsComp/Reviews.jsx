import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./Reviews.css";
import img1 from "../ServicesComp/img/1.png";
import img2 from "../ServicesComp/img/2.png";
import img3 from "../ServicesComp/img/3.png";
import img4 from "../ServicesComp/img/4.png";
import img5 from "../ServicesComp/img/5.png";
import img6 from "../ServicesComp/img/6.png";
import img7 from "../ServicesComp/img/7.png";
import img8 from "../ServicesComp/img/8.png";
import img9 from "../ServicesComp/img/9.png";

const Reviews = () => {
    const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div className="my-4">
            <section className="container">
                <Row>
                    <Col className="text-center" sm={12} lg={6} md={6}>
                        <span className="text-muted h4" style={{ borderBottom: "3px solid #dc3545" }}>
                            Varfor Kopa Fran Oss?
                        </span>
                        <section className="my-3 py-3 shadow-sm" style={{ backgroundColor: "#f7f7f7" }}>
                            <div className="grid-images">
                                {
                                    array && array.map((item, index) => {
                                        return <div key={index} className="d-flex justify-content-center" ><img src={item} alt="" /></div>
                                    })
                                }
                            </div>
                        </section>
                    </Col>
                    <Col className="text-center">
                        <span className="text-muted h4" style={{ borderBottom: "3px solid #dc3545" }}>
                            Customer Reviews
                        </span>
                        <section className="shadow-sm my-3 py-4">
                            <div>
                                <i className="fa fa-star-o text-success mx-1" style={{ fontSize: ' xx-large' }}></i>
                                <a href="https://se.trustpilot.com/review/firewallforce.se" className="h3 aTag fw-bold">Trustpilot</a>
                            </div>
                            <div className="my-2 text-center">
                                <i className="fa fa-star fa-lg text-success"></i>
                                <i className="fa fa-star fa-lg text-success"></i>
                                <i className="fa fa-star fa-lg text-success"></i>
                                <i className="fa fa-star fa-lg text-success"></i>
                                <i className="fa fa-star fa-lg text-success"></i>
                            </div>
                            <div className="img-cont-review">
                                {/* <img className="w-25 mt-5" src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" /> */}
                            </div>
                        </section>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Reviews;