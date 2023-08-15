/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function VideoCard({ id, url, title }) {
  const navigate = useNavigate();
  function onClick() {
    navigate(`watch/${id}`);
  }
  return (
    <div className="video-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={url} alt={title} />
      </div>
      <h5>{title}</h5>
    </div>
  );
}

VideoCard.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoCard;
