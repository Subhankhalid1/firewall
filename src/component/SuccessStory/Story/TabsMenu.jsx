import React, { useState } from 'react';
import "./style.css";
import { Row, Col } from "react-bootstrap";
import pic from "../../Home/CarouselGallery/img/g1.jpg";

const TabsMenu = ({ diamond }) => {
    const [active, setActive] = useState(0);
    const [header, setHeader] = useState('IT-inkop');
    const objectsData = [
        { name: 'IT-inkop', subName: '' },
        { name: 'Omgaende', subName: 'Ingenjorer' },
        { name: 'Teknish', subName: 'Radgivning' },
        { name: 'Driftsattning Och', subName: 'Konfiguration' },
        { name: 'Partner', subName: 'Supporttjanster' },
        { name: 'Serviceninaavtal', subName: '(SLA)' },
        { name: 'Bevis Pa Koncept', subName: 'Tjanster (POC)' }
    ]
    return <>
        <section className="d-flex justify-content-center diamond-overflow">
            {
                objectsData.map((item, index) => {
                    return <div onClick={() => {
                        setActive(index);
                        setHeader(`${item.name} ${item.subName}`);
                    }} key={index} className={active === index ? "border-bottom-diamond padding-bottom pb-4 d-flex flex-column align-items-center" : "border-gray padding-bottom pb-4 d-flex flex-column align-items-center"}>
                        <div className={active === index ? "diamond active-diamond" : "diamond"}></div>
                        <div className="text-center text-div mt-3 d-flex flex-column">
                            <span className={active === index ? "text-danger" : "text-muted"}>{item.name}</span>
                            <span className={active === index ? "text-danger" : "text-muted"}>{item.subName}</span>
                        </div>
                    </div>
                })
            }
        </section>
        <section className="diamond-detail my-4 p-3">
            <Row>
                <Col lg={5}>
                    <img className="detail-image" src={pic} alt="" />
                </Col>
                <Col lg={7} className="img-text-margin">
                    <h3 className="text-muted fw-bold">{header}:</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur sed, pariatur dolorum incidunt error, sint quas sunt nulla mollitia quos illo magni soluta quasi culpa eaque aperiam vero non?</p>
                        <p className="text-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur sed, pariatur dolorum incidunt error, sint quas sunt nulla mollitia quos illo magni soluta quasi culpa eaque aperiam vero non?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur sed, pariatur dolorum incidunt error, sint quas sunt nulla mollitia quos illo magni soluta quasi culpa eaque aperiam vero non?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur sed, pariatur dolorum incidunt error, sint quas sunt nulla mollitia quos illo magni soluta quasi culpa eaque aperiam vero non?</p>
                    </div>
                </Col>
            </Row>
        </section>
    </>
}

export default TabsMenu;