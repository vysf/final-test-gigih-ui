/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function VideoDetailLoading() {
  return (
    <>
      <div
        style={{ width: '854px', height: '480px' }}
        className="skeleton"
      />
      <br />
      <h3 className="skeleton-text skeleton" />
      <div className="video-description skeleton" style={{ height: '100px' }} />
    </>
  );
}

export default VideoDetailLoading;
