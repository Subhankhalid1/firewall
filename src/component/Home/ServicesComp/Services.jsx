import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./Services.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";

const Services = () => {
    const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div>
            <section className="container text-center mt-4">
                <span className="text-muted h4" style={{ borderBottom: "3px solid #dc3545" }}>Our Services</span>
                <div className="mx-auto my-2 service-text" style={{ width: "25rem" }} >
                    <span className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate exercitationem sequi
                    </span>
                </div>
            </section>
            <section className="container">
                <div className="services-page shadow-sm rounded">
                    <Row className="row-overlay">
                        <Col className="py-4">
                            <div className="grid-images">
                                {
                                    array && array.map((item, index) => {
                                        return <div key={index} className="d-flex justify-content-center" ><img src={item} alt="" /></div>
                                    })
                                }
                            </div>
                        </Col>
                        <Col className="py-3 mx-3 column-pictire-overlay" >
                            <div className="detail-item d-flex justify-content-center align-items-center">
                                <div className="overlay d-flex align-items-center">
                                    <div className="mx-3">
                                        <h6 className="mb-4">Lorem Ipsem</h6>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor nostrum eum quas quis possimus quod tenetur, blanditiis ea incidunt veritatis qui est tempora pariatur autem quaerat quae quidem fugiat!</span>
                                        <div className="py-4 text-center">
                                            <button className="btn btn-danger text-capitalize">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Services;