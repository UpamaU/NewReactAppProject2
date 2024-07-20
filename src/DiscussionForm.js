import React, { useState } from 'react';
import './DiscussionForm.css';

const DiscussionForm = ({ onSubmit, onClose }) => {
  const [postType, setPostType] = useState('chat');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState([{ label: '', votes: 0 }, { label: '', votes: 0 }]);
  const [optionCount, setOptionCount] = useState(2);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].label = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    if (optionCount < 4) {
      setOptions([...options, { label: '', votes: 0 }]);
      setOptionCount(optionCount + 1);
    }
  };

  const removeOption = () => {
    if (optionCount > 2) {
      setOptions(options.slice(0, -1));
      setOptionCount(optionCount - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      type: postType,
      title,
      description,
      options: postType === 'poll' ? options.reduce((acc, curr, i) => ({ ...acc, [`option${i + 1}`]: curr }), {}) : undefined
    };
    onSubmit(newPost);
    onClose();
  };

  return (
    <div className="discussion-form">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Type: 
          <select value={postType} onChange={(e) => setPostType(e.target.value)}>
            <option value="chat">Start a Chat</option>
            <option value="poll">Start a Poll</option>
          </select>
        </label>
        {postType === 'poll' && (
          <>
            {options.map((option, index) => (
              <div key={index}>
                <label>
                  Option {index + 1}:
                  <input
                    type="text"
                    value={option.label}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    required
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addOption}>Add Option (Max. 4)</button>
            <button type="button" onClick={removeOption} className="cancel-button">Remove Option</button>

          </>
        )}
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
      </form>
    </div>
  );
};

export default DiscussionForm;
