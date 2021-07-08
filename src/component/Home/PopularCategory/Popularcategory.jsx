import React from "react";
import Carousel from 'react-elastic-carousel'; 
import "./Popular.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";

export default function Popular() {
    const array = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 4 },
    ]
    return (
        <div className="container">
            <div className="text-center mb-5">
                <span className="text-muted h4 " style={{ borderBottom: "3px solid #dc3545" }}>
                    Bladdra Efter Popular Kategori
                </span>
            </div>
            <Carousel breakPoints={breakPoints} pagination={false}>
                {
                    array.map(item => {
                        return <div>
                            <img src={item} alt="" />
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}