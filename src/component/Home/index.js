import React from 'react';
import Carousel from './CarouselGallery/Carousel';
import Popularcategory from './PopularCategory/Popularcategory';
import Services from './ServicesComp/Services';
import Card from "./SliderCards/Cards";
import Natvark from './Natvark/Natvark';
import Reviews from './ReviewsComp/Reviews';
import Methods from './Methods/Methods';
import FeaturedSignup from './FeaturedBrandAndSignup/FeaturedSignup';

const index = () => {
    return (
        <div>
            <Carousel />
            <Popularcategory />
            <Services />
            <Natvark />
            <Card />
            <Reviews />
            <Methods />
            <FeaturedSignup />
        </div>
    )
}

export default index
