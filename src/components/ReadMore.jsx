/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? <b>...more</b> : <b>show less</b>}
      </span>
    </p>
  );
}

ReadMore.propTypes = {
  children: PropTypes.node,
};

export default ReadMore;
