import React, { useContext } from 'react';
import ListItems from "./ListItems";
import "./style.css";
import { GlobalContext } from "../../Context/Context";

const AccordionComp = ({ title, categoryCount, filterCategoryProducts, categoryList }) => {
    const { SetBrandSearch } = useContext(GlobalContext);
    return (
        <div className="shadow-sm mb-4">
            <section className="bg-danger px-4 py-2 text-white d-flex justify-content-between align-items-center">
                <span className="text-uppercase" style={{ letterSpacing: "2px" }}>{title}</span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </section>
            {
                title === "Brands" &&
                <section className="d-flex justify-content-center align-items-center my-3">
                    <div className="search search-container d-flex align-items-center">
                        <input onChange={(e) => SetBrandSearch(e.target.value)} className="search-input input-searchbar input-blog" type="text" placeholder="Search" aria-label="Search" />
                        <i className="fa fa-search text-muted mx-2" aria-hidden="true"></i>
                    </div>
                </section>
            }
            <section className={title !== 'Brands' ? "mt-4" : "mt-0"}>
                {/* <section className={(products === 'true' && title !== 'Brands') ? 'for-length-short-height mt-4' : "for-length-short-height mt-0"}> */}
                <ListItems categoryList={categoryList} filterCategoryProducts={filterCategoryProducts} categoryCount={categoryCount} />
            </section>
            {/* <section className="py-2 px-3 text-danger d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f7f7f7" }}> */}
                {/* <i className="fa fa-plus-square" aria-hidden="true"></i>
                <span className="mx-2 titlename">View More {title}</span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i> */}
            {/* </section> */}
        </div>
    )
}

export default AccordionComp;