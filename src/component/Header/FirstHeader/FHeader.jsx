import React from 'react';
import "./FHeader.css";

const FHeader = () => {
    return (
        <div className="main-container text-white">
            <div className='container sub-container d-flex justify-content-center align-items-center'>
                <section className="FH-Div">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="mx-2">49 49999999</span>
                </section>
                <section className="FH-Div d-flex justify-content-between align-items-center text-uppercase">
                    <span>create account</span>
                    <span>faq</span>
                    <span>e-procurement tools</span>
                    <span>support</span>
                    <div>
                        <i className="fa fa-flag" aria-hidden="true"></i>
                        <i className="fa fa-caret-down ms-3" aria-hidden="true"></i>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FHeader;
