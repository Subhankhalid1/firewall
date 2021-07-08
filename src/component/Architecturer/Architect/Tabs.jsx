import React from 'react';
import "./style.css";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
import TabDetail from './TabDetail';

const Tabs = () => {
    const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum, voluptas necessitatibus dignissimos, vitae minus, nesciunt eos molestiae alias aliquam officiis ab quidem? Atque enim dolor optio, ut provident reiciendis!'
    return (
        <div className="container mb-5">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col lg={4}>
                        <ListGroup>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link1">
                                <Avatar>N</Avatar>
                                <span className="mx-3">Natverksinfrasturktur</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link2">
                                <Avatar>L</Avatar>
                                <span className="mx-3">Lokal Sakerhet</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link3">
                                <Avatar>T</Avatar>
                                <span className="mx-3">Tradlost & Rorlighet</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link4">
                                <Avatar>D</Avatar>
                                <span className="mx-3">Data Center</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link5">
                                <Avatar>S</Avatar>
                                <span className="mx-3">SD-WAN</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link6">
                                <Avatar>SM</Avatar>
                                <span className="mx-3">SMB-Losningar</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center" action href="#link7">
                                <Avatar>A</Avatar>
                                <span className="mx-3">Alt Volp</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <TabDetail heading="Natverksinfrasturktur" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <TabDetail heading="Lokal Sakerhet" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <TabDetail heading="Tradlost & Rorlighet" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <TabDetail heading="Data Center" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <TabDetail heading="SD-WAN" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <TabDetail heading="SMB-losningar" detail={data} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link7">
                                <TabDetail heading="Alt Volp" detail={data} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Tabs;
