/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import image404 from '../assets/side-ayes-chloe.jpg';

function NotFoundPage() {
  return (
    <div className="containe-404">
      <h2>Whoops!</h2>
      <span>404 Page Not Found</span>
      <img src={image404} alt="404" width="40%" />
      <span>Sepertinya kamu tersesat</span>
      <p>
        Segera kembali ke
        {' '}
        <Link to="/">rumah</Link>
        .
      </p>
    </div>
  );
}

export default NotFoundPage;
