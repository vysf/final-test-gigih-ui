import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentCard({
  name, body, imageUrl, createdAt,
}) {
  return (
    <div className="comment-card">
      <div className="image-wrapper">
        <img src={imageUrl} alt={name} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h4 style={{ marginRight: '15px' }}>{name}</h4>
          <span style={{ fontSize: '14px' }}>{postedAt(createdAt)}</span>
        </div>
        <p>
          {body}
        </p>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CommentCard;
