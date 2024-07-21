import React, { useState } from 'react';
import './PollForm.css';

const PollForm = ({ onSubmit, onClose }) => {
  const [pollTitle, setPollTitle] = useState('');
  const [pollDescription, setPollDescription] = useState('');
  const [options, setOptions] = useState([{ label: '', votes: 0 }, { label: '', votes: 0 }]);
  const [extraOptions, setExtraOptions] = useState([]);

  const handleChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index].label = event.target.value;
    setOptions(newOptions);
  };

  const handleExtraChange = (index, event) => {
    const newExtraOptions = [...extraOptions];
    newExtraOptions[index] = event.target.value;
    setExtraOptions(newExtraOptions);
  };

  const addExtraOption = () => {
    setExtraOptions([...extraOptions, '']);
  };

  const removeExtraOption = (index) => {
    if (extraOptions.length > 0) {
      setExtraOptions(extraOptions.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title: pollTitle,
      description: pollDescription,
      options: [...options, ...extraOptions.map(label => ({ label, votes: 0 }))],
    });
    onClose();
  };

  return (
    <div className="poll-form">
      <h2>Start a Poll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pollTitle">Poll Title:</label>
          <input
            type="text"
            id="pollTitle"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pollDescription">Description:</label>
          <textarea
            id="pollDescription"
            value={pollDescription}
            onChange={(e) => setPollDescription(e.target.value)}
            required
          />
        </div>
        {options.map((option, index) => (
          <div key={index}>
            <label htmlFor={`option${index}`}>Option {index + 1}:</label>
            <input
              type="text"
              id={`option${index}`}
              value={option.label}
              onChange={(e) => handleChange(index, e)}
              required={index < 2}
            />
          </div>
        ))}
        {extraOptions.map((option, index) => (
          <div key={`extra-${index}`}>
            <label htmlFor={`extraOption${index}`}>Extra Option {index + 3}:</label>
            <input
              type="text"
              id={`extraOption${index}`}
              value={option}
              onChange={(e) => handleExtraChange(index, e)}
            />
            <button 
              type="button" 
              className="remove-option-button" 
              onClick={() => removeExtraOption(index)}
              disabled={extraOptions.length < 1} // Disable if only one extra option remains
            >
              Remove
            </button>
          </div>
        ))}
        <button 
          type="button" 
          className="add-option-button" 
          onClick={addExtraOption}
        >
          Add Extra Option
        </button>
        
        <button type="submit">Create Poll</button>
        <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
      </form>
    </div>
  );
};

export default PollForm;
