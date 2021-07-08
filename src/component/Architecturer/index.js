import React from 'react';
import HeroSection from './Architect/HeroSection';
import Tabs from './Architect/Tabs';
import CardsSlider from "../Home/SliderCards/Cards";
import Request from "./Architect/Request";

const index = () => {
    return (
        <div>
            <HeroSection />
            <Tabs />
            <CardsSlider heading={false} />
            <Request />
        </div>
    )
}

export default index;
