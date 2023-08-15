/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

function ProductLoading() {
  return (
    <div className="product-card">
      <div className="skeleton image-wrapper" />
      <h5 className="skeleton skeleton-text" />
      <h5 className="skeleton skeleton-text" />
    </div>
  );
}

export default ProductLoading;
