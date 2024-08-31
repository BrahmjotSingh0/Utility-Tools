import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

function Overlay({ isVisible, onClose, title, children }) {
    if (!isVisible) return null;

    return (
        <div className="overlay">
            <div className="overlay-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
}

Overlay.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Overlay;