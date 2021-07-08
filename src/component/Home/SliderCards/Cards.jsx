import React from 'react';
import pic from "../CarouselGallery/img/g1.jpg";
import Carousel from 'react-elastic-carousel';

const Cards = ({ heading, success }) => {
    const array = [1, 2, 3, 4, 5, 6];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
    ]

    return (
        <div>
            {
                heading !== false && <section className="container text-center mt-4">
                    <span className="text-muted h4" style={{ borderBottom: "3px solid #dc3545" }}>{success ? success : 'Senaste Fran Tekniskt Bibliotek'}</span>
                    <div className={success ? 'my-4' : "mx-auto my-2 service-text"} style={{ width: "27rem" }} >
                        {
                            !success &&
                            <span className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate exercitationem sequi
                            </span>
                        }
                    </div>
                </section>
            }
            <section className="container services-page card-page shadow-sm py-4">
                <Carousel breakPoints={breakPoints}>
                    {
                        array.map((item, index) => {
                            return <div key={index} className="card mx-1">
                                <img className="card-img-top" src={pic} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        })
                    }
                </Carousel>
            </section>
        </div>
    )
}

export default Cards;
