import React from 'react';
import "./style.css";

const HeroSection = () => {
    return <>
        <div className='architect-main'>
            <section className="container architext-sub-main d-flex flex-column py-5">
                <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">Vara losningar hjalper</span>
                <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">foretag att forbattra och utveckla</span>
                <span className="text-white hero-sec-text text-uppercase fw-bold fs-4 span-letter-spc">sin it-natverksinfrastruktur</span>
            </section>
        </div>
        <section className="text-center bygga-parent py-5">
            <span className="back-border bygga-text-heading fs-4 fw-bold text-muted">Bygga Avancerade Vatverkstjanst Arkitekturer</span>
            <div className="mx-auto mt-1 text-of-heading">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint sunt quas dignissimos nesciunt perferendis architecto,
                </p>
            </div>
        </section>
    </>
}

export default HeroSection;