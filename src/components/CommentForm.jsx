import React from 'react';
import PropTypes from 'prop-types';

function CommentForm({
  handleForm, handleBodyChange, handleNameChange, name, body,
}) {
  return (
    <div className="comment-container">
      <form className="form-comment" onSubmit={handleForm}>
        <input placeholder="My name is..." onChange={handleNameChange} value={name} required />
        <input placeholder="Add a commnet..." onChange={handleBodyChange} value={body} required />
        <button className="submit-comment" type="submit">Submit</button>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentForm;
