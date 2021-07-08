import React, { useContext } from 'react';
import "./SHeader.css";
import { Row, Col } from "react-bootstrap";
import { GlobalContext } from "../../Context/Context";
import Badge from '@material-ui/core/Badge';
import {useHistory} from 'react-router-dom'

const SHeader = () => {
    const { toggleDrawer, cartData } = useContext(GlobalContext);
    const history =useHistory()
    let total = 0;
    cartData && cartData.forEach(item => {
        total += Number(item.price * item.count)
    })

    return (
        <div className="d-flex sub-container-SHeader align-items-center">
            <section className="container row-head py-2">
                <Row className="row-s-header">
                    <Col className="col-1-s-header d-flex align-items-center" lg={5}>
                        <i onClick={toggleDrawer('left', true)} className="fa fa-bars text-danger bars-expand fa-lg" aria-hidden="true"></i>
                        <div className="SH-Div d-flex align-items-center" onClick={()=>history.push(`/`)}>
                            <img className="image-logo" src="https://firewallforce.net/wp-content/uploads/2020/06/fw-icon-300x300.png" alt="" />
                            <span className="text-danger h2 mx-2 fw-light">Firewall<span className="text-dark h2 fw-light">Force</span></span>
                        </div>
                        <div className="text-danger cart first-cart">
                            <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            <span>{total.toFixed(2)} KR</span>
                        </div>
                    </Col>
                    <Col className="col-2-s-header d-flex align-items-center justify-content-between" lg={7}>
                        <div className="search d-flex align-items-center">
                            <input className="search-input" type="text" placeholder="Search" aria-label="Search" />
                            <i className="fa fa-search text-danger mx-2" aria-hidden="true"></i>
                        </div>
                        <button className="btn btn-danger s-btn py-2 px-3">
                            <a className="text-white text-decoration-none" href="https://firewallforce.se/begar-offert-it-natverksprodukter/"
                                target="_blank">Beggar Offert
                            </a>
                        </button>
                        <div className="text-danger cart second-cart" onClick={()=>history.push(`/cart`)}>
                            <Badge badgeContent={cartData?.length} color="secondary">
                                <i className="fa fa-shopping-cart mx-1" aria-hidden="true"></i>
                            </Badge>
                            <span className="ms-3">{total.toFixed(2)} KR</span>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default SHeader;
