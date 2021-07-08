import React from 'react';
import TabsMenu from "./TabsMenu";
import PopularCategory from "../../Home/PopularCategory/Popularcategory";
import Cards from "../../Home/SliderCards/Cards";
import Request from "../../Architecturer/Architect/Request";

const Tabs = () => {
    return (
        <div>
            <section className="text-center bygga-parent tjanster-parent py-5">
                <span className="back-border bygga-text-heading fs-4 fw-bold text-muted">Utforska Vara Tjanster</span>
                <div className="mx-auto mt-1 text-of-heading">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint sunt quas dignissimos nesciunt perferendis architecto,
                </p>
                </div>
            </section>
            <section className="container">
                <TabsMenu />
                <div className="my-5">
                    <PopularCategory />
                </div>
                <Cards success={'Our Success Stories'} />
                <Request />
            </section>
        </div>
    )
}

export default Tabs;