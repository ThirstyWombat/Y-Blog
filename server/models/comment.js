const React = require('react');

const Comment = ({ comment }) => {
  const { commentText, commentAuthor, createdAt } = comment;

  return (
    <div className="comment">
      <p className="comment-text">{commentText}</p>
      <p className="comment-author">By: {commentAuthor.username}</p>
      <p className="comment-date">Posted on: {new Date(createdAt).toLocaleString()}</p>
    </div>
  );
};

module.exports = Comment;