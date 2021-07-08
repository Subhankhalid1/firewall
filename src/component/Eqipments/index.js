import React, { useEffect, useContext, useState } from 'react';
import Hero from './Eqipment/Hero';
import CablingEquipment from './Eqipment/CablingEquipment';
import TrustPilot from "../SuccessStory/Story/Trustpilot";
import queryString from "query-string";
import { GlobalContext } from "../Context/Context";

const Index = () => {
    const { catID, category, slug } = queryString.parse(window.location.search);
    const { getAllProductCategories, productCategory, setProductDetail, categoryInfo } = useContext(GlobalContext);
   
    useEffect(() => {
        getAllProductCategories(category, 1);
    }, [])



    return (
        <div>
            <Hero />
            <CablingEquipment
                getAllProductCategories={getAllProductCategories}
                setProductDetail={setProductDetail}
                productCategory={productCategory}
                catID={catID}
                slug={slug}
                category={category}
                categoryInfo={categoryInfo}
            />
            <TrustPilot />
        </div>
    )
}

export default Index;