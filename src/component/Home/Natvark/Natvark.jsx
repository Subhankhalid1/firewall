import React from 'react';
import { Row, Col } from "react-bootstrap";
import img1 from "../ServicesComp/img/1.png";
import img2 from "../ServicesComp/img/2.png";
import img3 from "../ServicesComp/img/3.png";
import img4 from "../ServicesComp/img/4.png";
import img5 from "../ServicesComp/img/5.png";
import img6 from "../ServicesComp/img/6.png";
import img7 from "../ServicesComp/img/7.png";
import img8 from "../ServicesComp/img/8.png";
import img9 from "../ServicesComp/img/9.png";

const Natvark = () => {
    const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    return (
        <div>
            <section className="container text-center mt-4">
                <span className="text-muted h4 " style={{ borderBottom: "3px solid #dc3545" }}>
                    Fran Komplexitet Till Klarhet,
                </span>
                <br />
                <span className="text-muted position-relative h4 my-2" style={{ borderBottom: "3px solid #dc3545", top: "5px" }}>
                    Bygger Vi Natvark
                </span>
                <div className="mx-auto my-3 service-text" style={{ width: "27rem" }} >
                    <span className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate exercitationem sequi
                    </span>
                </div>
            </section>
            <section className="container">
                <div className="services-page shadow-sm rounded">
                    <Row>
                        <Col className="py-3 mx-3 column-pictire-overlay" sm={12} lg={6} md={6}>
                            <div className="detail-item d-flex justify-content-center align-items-center">
                                {/* <img src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" /> */}
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
                        <Col className="py-4">
                            <div className="grid-images">
                                {
                                    array && array.map((item, index) => {
                                        return <div key={index} className="d-flex justify-content-center" ><img src={item} alt="" /></div>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}

export default Natvark;