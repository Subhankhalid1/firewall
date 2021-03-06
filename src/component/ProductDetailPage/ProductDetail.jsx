import React, { useContext, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "./style.css";
import SmallSlider from "./Slider";
import FeaturedProduct from "./RelatedProducts";
import TrustPilot from "../SuccessStory/Story/Trustpilot";
import { GlobalContext } from "../Context/Context";
import Tabs from "./Tabs";
import ReactHtmlParser from 'react-html-parser';
import queryString from "query-string";

const ProductDetail = () => {
    const [count, setCount] = useState(1);
    const{slug}=queryString.parse(window.location.search)
    const { productDetail, productCategory, setCartData } = useContext(GlobalContext);
    const [defaultImage, setDefault] = useState(0)
console.log(productDetail)
    
//Dynamic select images (SingleProductPage)
    let images = productDetail.images?.slice(1, productDetail.images?.length)

    const addToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.title, price: item.price, count: count, image: item.images && item.images };
        if (cartItems === null) {
            let cartArray = [];
            cartArray.push(selectiveItems);
            setCartData(cartArray);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else if (cartItems) {
            cartItems.push(selectiveItems);
            setCartData(cartItems);
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }

    return (
        <div>
            <section className="container sec-route my-5">
                <Row>
                    <section className="d-flex">
                        <span className="fw-bold text-small">Home</span>
                        <i class="fa fa-chevron-right text-danger mx-2" aria-hidden="true"></i>

                        <span className="fw-bold text-small">{slug}</span>
                        <i class="fa fa-chevron-right text-danger mx-2" aria-hidden="true"></i>
                        <span className="fw-bold text-small">{productDetail.name ? productDetail.name : productDetail.title}</span>

                    </section>
                    <Col className="py-4" lg={6}>
                        <section className="detail-img-container shadow">
                            <img className="product-detail-img" src={productDetail && productDetail.images && productDetail.images[defaultImage].src} alt="" />
                        </section>
                        <section className="sub-images-grid mt-3">
                            {
                                images && images.map((item, index) => {
                                    return <div key={index} onClick={() => setDefault(index + 1)} className="sub-img-container shadow">
                                        <img className="sub-img" src={item.src} alt="" />
                                    </div>
                                })
                            }
                        </section>
                    </Col>
                    <Col className="py-4">
                        <h3 style={{ letterSpacing: "2px" }} class="fw-bold text-muted"> {productDetail.name ? productDetail.name : productDetail.title}</h3>
                        <div className="justify px-4" style={{ maxHeight: "15rem", overflow: "auto" }}>
                            <span style={{ fontSize: "small" }}>{ReactHtmlParser(productDetail && productDetail.short_description)}</span>
                        </div>
                        <div className="mt-3 d-flex">
                            <section>
                                <i className="fa mx-1 fa-star fa-lg"></i>
                                <i className="fa mx-1 fa-star fa-lg"></i>
                                <i className="fa mx-1 fa-star fa-lg"></i>
                                <i className="fa mx-1 fa-star fa-lg"></i>
                                <i className="fa mx-1 fa-star fa-lg"></i>
                            </section>
                            <section className="ms-3">
                                <span className="text-danger fw-bold">Rate This Product</span>
                            </section>
                        </div>
                        <div>
                            <i class="fa fa-heart fa-lg text-muted mx-1 mt-3" aria-hidden="true"></i>
                        </div>

                        <div className="mt-3 d-flex align-items-center">
                            <h3 className="fw-bold text-danger">{productDetail && productDetail.price} KR</h3>
                            <span className=" mx-3 yellow-color fw-bold">Excluding VAT</span>
                        </div>

                        <div className="mt-5">
                            <h6 className="text-danger fw-bold">Condition: <span className="badge">New</span></h6>
                            <h6 className="text-danger fw-bold">Warranty: <span className="text-muted fw-normal">Manufacture Standard Warranty. </span><span className="text-danger">Learn More</span></h6>
                        </div>

                        <div className="mt-4 cart-button-detail">
                            <button className="btn w-100-resp py-2 btn-danger" onClick={() => addToCart(productDetail)}>
                                <i class="fa fa-lg me-2 fa-shopping-cart" aria-hidden="true"></i>Add To Cart
                            </button>
                            <input type="number" className="py-2 ms-3 input-nmbr" onChange={(e) => setCount(e.target.value)} defaultValue="1" name="" id="" />
                            <button className="btn w-100-resp ms-3 btn-outline-secondary py-2 px-4">Bulk Quote</button>
                        </div>

                        <div style={{ marginTop: "2rem" }}>
                            <img className="w-100-resp" src="data:image/jpeg;base64,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" alt="" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <SmallSlider />
                    </Col>

                </Row>
                <Tabs />
                <section className={productCategory.length === 0 ? "d-none" : "d-block"}>
                    <FeaturedProduct productCategory={productCategory} />
                </section>
                <section className={productCategory.length === 0 ? "mt-4" : "mt-0"}>
                    <TrustPilot />
                </section>
            </section>
        </div >
    )
}

export default ProductDetail;