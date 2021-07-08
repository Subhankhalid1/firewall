import React from 'react';
import { Row, Col } from "react-bootstrap";
import Gallery from './Gallery';
import Category from '../Category/Category';
import PostComment from './PostComment';

const Post = () => {
    return (
        <div className="my-5">
            <section className="container">
                <Row>
                    <Col lg={7}>
                        <Gallery />
                        <PostComment/>
                    </Col>
                    <Col lg={5}>
                        <Category />
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Post;
