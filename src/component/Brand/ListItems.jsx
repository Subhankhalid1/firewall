import React, { useContext } from 'react';
import Pagination from "./Pagination";
import { GlobalContext } from "../Context/Context";
import { useHistory } from "react-router-dom";
const ListItems = () => {
    const { products, setProductDetail, setCartData } = useContext(GlobalContext);
    const history = useHistory();

    const AddDetailFunc = (item) => {
        setProductDetail(item);
        history.push(`/detailpage?name=${item.name}`)
    }
    
    const AddToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.name, price: item.price, count: 1, image: item.images && item.images };
        if (cartItems === null) {
            let cartArray = [];
            cartArray.push(selectiveItems);
            setCartData(cartArray)
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else if (cartItems) {
            cartItems.push(selectiveItems);
            setCartData(cartItems)
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }

    return <>
        <section className="text-center bygga-parent equip-parent py-3">
            <span className="back-border bygga-text-heading fs-4 fw-bold text-muted text-capitalize">
                Top Products
                </span>
        </section>
        <div className="py-4 px-2 my-4 shadow-sm" style={{ backgroundColor: "white", width: '85%', margin: 'auto' }}>

            <section className="grid-comm grid-brand-map" >
                {
                    products && products.map((item, index) => {
                        return <section key={index} className="bg-white mb-3 mx-2 shadow px-3" style={{ borderRadius: "15px" }}>
                            <div onClick={(e) => AddDetailFunc(item)} className="d-flex brand-img-div-map justify-content-center align-items-center pt-3">
                                <img className="brand-img-map" src={item.images.length > 0 && item.images[0].src} alt="" />
                            </div>

                            <hr style={{ border: "1px solid red" }} />
                            <div className="pb-3">
                                <section className="d-flex brand-map-name justify-content-between align-items-center">
                                    <span className="text-capitalize fw-bold">{item.name}</span>
                                    <i className="fa fa-heart text-muted fa-lg"></i>
                                </section>
                                <section>
                                    <span className="fw-bold text-danger">{item.price} kR</span>
                                    <span className="font-size-small mx-2 yellowtxt">Excluding VAT</span>
                                </section>
                                <button className="btn btn-primary mt-3 btn-size" onClick={() => AddToCart(item)}>
                                    <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                        Add To cart
                                </button>
                            </div>
                        </section>
                    })
                }
            </section>

            <Pagination />
        </div>
    </>
}

export default ListItems;