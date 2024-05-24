import React from 'react';

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", width: "50px", height: "50px", borderRadius: "50%", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", width: "50px", height: "50px", borderRadius: "50%", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export { NextArrow, PrevArrow };
