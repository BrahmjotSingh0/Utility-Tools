import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, content, image, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-content">{content}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;