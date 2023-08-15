import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ title, thumbnail, price }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={thumbnail} alt={title} />
      </div>
      <h5>{title}</h5>
      <span>
        $
        {' '}
        {price}
      </span>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
