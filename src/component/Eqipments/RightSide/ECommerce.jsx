import React, { useContext } from 'react';
import Extra from './Extra';
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../../Context/Context'
const ECommerce = ({ slug, categoryInfo, productCategory, setProductDetail, getAllProductCategories, catID }) => {

    const { setCartData } = useContext(GlobalContext);
    const history = useHistory();
    const AddDetailFunc = (item) => {
        setProductDetail(item);
        history.push(`/detailpage?slug=${slug}&name=${item.title}`)
    }
    const AddToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        const selectiveItems = { id: item.id, name: item.title, price: item.price, count: 1, image: item.images && item.images };
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
        <div className="py-4 px-2 my-4 shadow-sm" style={{ backgroundColor: "#f7f7f7" }}>
            <section className="grid-comm">
                {
                    productCategory && productCategory?.map((item, index) => {
                        return <section key={index} className="bg-white mb-3 mx-2 shadow px-3" style={{ borderRadius: "15px" }}>
                            <div onClick={(e) => AddDetailFunc(item)} className="d-flex brand-img-div-map justify-content-center align-items-center pt-3">
                                <img className="brand-img-map" src={item.images?.length > 0 && item.images[0]?.src} alt="" />
                            </div>

                            <hr style={{ border: "1px solid red" }} />
                            <div className="pb-3">
                                <section className="d-flex brand-map-name justify-content-between align-items-center">
                                    <span className="text-capitalize fw-bold">{item.title}</span>
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
            {/* <Extra /> */}
            <Pagination categoryInfo={categoryInfo} catID={catID} getAllProductCategories={getAllProductCategories} />
        </div>
    </>
}

export default ECommerce;