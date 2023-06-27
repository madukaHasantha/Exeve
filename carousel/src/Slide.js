import React from 'react';

const Slide = ({ slide, active }) => {
    if (active) {
        return (
            <div className="slide active">
                <img src={slide.image} alt={slide.title} />
                <div className="slide-content">
                    <div id="title">{slide.title}</div>
                    <div id="sub">{slide.subTitle}</div>
                </div>
            </div>
        );
    }
};

export default Slide;
