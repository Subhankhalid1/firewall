import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContext from "./component/Context/Context";
import Footer from "./component/Footer/Footer";
import Drawer from "./component/Drawer/Drawer";
import Header from "./component/Header/index";
import Home from "./component/Home/index";
import Blog from "./component/Blog/index";
import Architecturer from "./component/Architecturer/index";
import SuccessStory from "./component/SuccessStory/index";
import FAQ from "./component/FAQ/index";
import Resource from './component/Resources/index';
import Eqipments from './component/Eqipments/index';
import Products from './component/Products/index';
import AboutUs from './component/AboutUs/index';
import ContactUs from './component/ContactUs/index'
import Model from './component/Model/index'
import DataCenter from './component/DataCenter/index'
import Brand from './component/Brand/index'
import ProductDetailPage from './component/ProductDetailPage/index'
import Fixed from './component/FixedComp/Fixed';
import Backdrop from "./component/Backdrop/Backdrop";
import Cart from "./component/Cart/Cart";

const App = () => {
    return (
        <MainContext>
            <BrowserRouter>
                <Header />
                <Drawer />
                <Fixed />
                <Backdrop />
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/solutions" component={Architecturer} />
                    <Route path="/services" component={SuccessStory} />
                    <Route path="/detailpage" component={ProductDetailPage} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/model" component={Model} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/brand" component={Brand} />
                    <Route path="/datacenter" component={DataCenter} />
                    <Route path="/resource" component={Resource} />
                    <Route path="/equipment" component={Eqipments} />
                    <Route path="/products" component={Products} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </BrowserRouter>


        </MainContext>
    )
}

export default App;