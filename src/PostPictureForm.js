import React, { useState } from 'react';
import './PostPictureForm.css';

const PostPictureForm = ({ onSubmit, onClose }) => {
  const [postAs, setPostAs] = useState('anonymous');
  const [picture, setPicture] = useState(null);
  const [caption, setCaption] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (picture && caption) {
      onSubmit({ type: 'picture', postAs, picture, caption, recipe });
    }
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="post-picture-form">
      <h2>Post a Picture</h2>
      <div>
        <label>
          <input
            type="radio"
            name="postAs"
            value="anonymous"
            checked={postAs === 'anonymous'}
            onChange={(e) => setPostAs(e.target.value)}
          />
          Post as Anonymous
        </label>
        <label>
          <input
            type="radio"
            name="postAs"
            value="user"
            checked={postAs === 'user'}
            onChange={(e) => setPostAs(e.target.value)}
          />
          Post as User
        </label>
      </div>
      <div>
        <label>
          Insert Picture:
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Caption:
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Recipe (optional):
          <textarea
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
    </form>
  );
};

export default PostPictureForm;
