/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

function VideoLoading() {
  return (
    <div className="video-card">
      <div className="skeleton image-wrapper" />
      <h5 className="skeleton skeleton-text" />
    </div>
  );
}

export default VideoLoading;
