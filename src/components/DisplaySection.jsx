import React from 'react'

function DisplaySection({ triggerPreview }) {

    const handleTopClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="display-section wrapper">
            <p className="text">Toyota AE86</p>
            <span className="description">
                “Hachi-Roku” (ハチロク)
            </span>

            <button className="button"
                onClick={triggerPreview}
            >Try Model</button>

            <button
                className="back-button"
                onClick={handleTopClick}
            >
                TOP
            </button>
        </div>
    )
}

export default DisplaySection
