/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ReadMore from './ReadMore';

function VideoDetail({ video }) {
  return (
    <>
      <iframe
        width="854"
        height="480"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <h3>{video.title}</h3>
      <div className="video-description">
        <ReadMore>
          {video.description ? video.description : 'loading...'}
        </ReadMore>
      </div>
    </>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
