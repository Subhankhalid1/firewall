import React from 'react';
import { Row, Col } from "react-bootstrap";

const Extra = () => {
    const array = [1, 2, 3];
    return <>
        {
            array.map((item, index) => {
                return <div className="mb-4" key={index}>
                    <Row className="bg-white py-4 mx-2 shadow-sm" style={{ borderRadius: "15px" }}>
                        <Col lg={3} className=" d-flex justify-content-center align-items-center">
                            <img className="w-100 img-upper-pagin" src="data:image/jpeg;base64,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" alt="" />
                        </Col>
                        <Col lg={9} className="">
                            <section className="d-flex flex-extra justify-content-between">
                                <div>
                                    <span className="text-capitalize fw-bold">digitus dk-4000102-050-R</span>
                                    <div>
                                        <p className="font-size-small text-muted">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ad accusantium minus dolore eaque eum facilis hic fuga quisquam
                                            rerum ducimus quo
                                        </p>
                                    </div>
                                    <section>
                                        <span className="fw-bold text-danger">0123.45 kr</span>
                                        <span className="font-size-small mx-3 yellowtxt">Excluding VAT</span>
                                    </section>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <p className="font-size-small text-muted ms-txt ms-3">
                                        Lorem ipsum dolor <span className="text-danger fw-bold">sit amet</span> consectetur, adipisicing elit.
                                        Ad accusantium minus dolore
                                    </p>
                                </div>
                            </section>
                            <section className="mt-1 btn-extra-grid">
                                <button className="btn btn-primary mt-1 font-size-small">
                                    <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                                       Add To cart
                                    </button>
                                <input defaultValue={1} className="mx-2 ps-2 text-muted input-number" type="number" />
                                <button className="btn btn-outline-danger font-size-small fw-bold">
                                    <i className="fa fa-bell-o mx-1" aria-hidden="true"></i>
                                Price/Stock Alert
                                </button>
                                <i className="fa fa-heart fa-lg text-danger mx-2"></i>
                            </section>
                        </Col>
                    </Row>
                </div>
            })
        }
    </>
}

export default Extra;