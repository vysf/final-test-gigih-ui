/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrollPosition > 0 ? 'container scroll' : 'container'}>
      <div className="logo-container">
        <Link to="/">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/2c9db05e.svg" alt="logo" width={100} height={22} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
