import React, { createContext, useEffect, useState } from 'react';
import { URL, consumer_key, consumer_secret, featured_Products } from "./api";
import WooCommerceAPI from "woocommerce-api";
import axios from "axios";

export const GlobalContext = createContext();

var WooCommerce = new WooCommerceAPI({
    url: URL,
    consumerKey: consumer_key,
    consumerSecret: consumer_secret,
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});

const MainContext = ({ children }) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [state, setState] = React.useState({
        left: false,
    });
    const [products, setProducts] = useState([]);
    const [productDetail, setDetail] = useState({});
    const [backdropOpen, setOpen] = useState(false);
    const [faqDisplay, setDisplay] = useState("one");
    const [blogData, setBlogData] = useState([]);
    const [productCategory, setCategory] = useState([]);
    const [checked, setChecked] = React.useState([]);
    const [brandSearch, SetBrandSearch] = useState('');
    const [cartData, setCartData] = useState(cart && cart);
    const [featuredProductsState, setFeaturedproducts] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState(null);

    useEffect(() => {
        GetProductsFirst();
        // getBlogs();
        featuredProducts();
    }, [])

    // get featured products
    const featuredProducts = async () => {
        const { data } = await axios.get(featured_Products);
        if (data) return setFeaturedproducts(data);
    }

    // Get Products Data from Backkend as per page 20
    const GetProductsFirst = () => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=50&page=1`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    // Update state for Products Pagination 
    const gettingChangeProducts = (page) => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=50&page=${page}`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    // Get Blog Post Data from Bcakend
    const getBlogs = async () => {
        startLoading();
        const URL = `https://firewallforce.se/wp-json/wc/v3/filter?category=router`;
        const { data } = await axios.get(URL);
        if (data) {
            EndLoading();
            setBlogData(data);
        }
    }

    const getAllProductCategories = (category, page) => {
        console.log(category, page);
        // startLoading();
        axios.get(`https://firewallforce.se/wp-json/wc/v3/filter?category=${category}&limit=50&page=${page}`)
            .then(res => {
                if (res.data) {
                    EndLoading();
                    console.log(res.data);
                    setCategory(res.data.Proucts?.products)
                    setCategoryInfo(res.data.categoryInfo);
                }
            })
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const setProductDetail = (product) => {
        setDetail(product);
    }

    const startLoading = () => {
        setOpen(true);
    }

    const EndLoading = () => {
        setOpen(false);
    }

    const faqDisplayChangeFunc = (view) => {
        setDisplay(view);
    }
    // filter checkBox categories
    const handleToggle = (value) => () => {
        if (checked.includes(value)) {
            let IndexOf = checked.indexOf(value);
            let newArray = checked.filter((item, index) => index !== IndexOf);
            setChecked(newArray);
        }
        else {
            setChecked([...checked, value]);
        }
    };

    return <GlobalContext.Provider value={{
        faqDisplay, checked, blogData, productCategory, handleToggle, getAllProductCategories, faqDisplayChangeFunc,
        state, backdropOpen, toggleDrawer, products, setProductDetail, productDetail,
        gettingChangeProducts, cartData, setCartData, categoryInfo,
        brandSearch, SetBrandSearch, featuredProductsState
    }}>
        {children}
    </GlobalContext.Provider>
}

export default MainContext;