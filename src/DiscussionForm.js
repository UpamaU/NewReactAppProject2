import React, { useState } from 'react';
import './DiscussionForm.css';

const DiscussionForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onSubmit({ title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="discussion-form">
      <h2>Start a Discussion</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
    </form>
  );
};

export default DiscussionForm;
