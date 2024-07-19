import React, { useState, useEffect } from 'react';
import './Forum.css';
import lasagnaPic from './images/lasagna.png';  
import chocolatecake from './images/chocolatecake.png';

const Forum = () => {
  const [repliesVisible, setRepliesVisible] = useState({
    discussion1: false,
    discussion2: false,
    discussion3: false, // New discussion for poll
  });

  // loading initial poll options state from local storage
  const initialPollOptions = () => {
    const storedOptions = localStorage.getItem('pollOptions');
    return storedOptions ? JSON.parse(storedOptions) : {
      option1: { label: 'Lasagna', votes: 0 },
      option2: { label: 'Chocolate Cake', votes: 0 },
      option3: { label: 'Stir-fry', votes: 0 },
      option4: { label: 'Pasta with Pesto', votes: 0 },
    };
  };

  const [pollOptions, setPollOptions] = useState(initialPollOptions);
  const [voted, setVoted] = useState(false); //track if user has voted

  // Save poll options state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pollOptions', JSON.stringify(pollOptions));
  }, [pollOptions]);

  const handleVote = (option) => {
    // handling of voting (need to upgrade backend eventually)
    if (!voted) {
      setPollOptions(prevOptions => ({
        ...prevOptions,
        [option]: {
          ...prevOptions[option],
          votes: prevOptions[option].votes + 1
        }
      }));
      setVoted(true); // set voted to true after user votes
    }
  };

  const calculatePercentage = (votes) => {
    const totalVotes = Object.values(pollOptions).reduce((acc, option) => acc + option.votes, 0);
    return totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(2) : 0;
  };

  const ExpandableCaption = ({ expanded, toggleExpand }) => {
    return (
      <div>
        {expanded ? (
          <>
            <p>
              Cook and drain the ground beef, then stir in the spaghetti sauce and simmer. Combine the cottage cheese, 2 cups of mozzarella, eggs, half of the Parmesan, and seasonings. Assemble the lasagna. Bake, covered, for 45 minutes. Uncover and continue baking for 10 minutes.
            </p>
            
            <p>
              1 pound lean ground beef, 1 (32 ounce) jar spaghetti sauce, 32 ounces cottage cheese, 3 cups shredded mozzarella cheese divided, 2 eggs, ½ cup grated Parmesan cheese, 2 teaspoons dried parsley, salt to taste, ground black pepper to taste, 9 lasagna noodles, ½ cup water
            </p>
            <button onClick={toggleExpand}>Show Less</button>
          </>
        ) : (
          <button onClick={toggleExpand}>Show More</button>
        )}
      </div>
    );
  };

  const handleAddFriend = (username) => {
    alert(`Added ${username} as a friend!`); // Placeholder for actual friend adding logic
  };

  return (
    <div className="forum-container">
      <h3>Post your food creation and even share the recipe! Start a discussion post to chat with fellow foodies or reply to an existing one! No account required.</h3>
      <div className="post-buttons">
        <button className="post-button">Post a Picture</button>
        <button className="post-button">Start a Discussion</button>
      </div>
      <div className="posts">
        {/* Picture Posts */}
        <div className="post">
          <div className="user-info">
            <h3>User1111</h3>
            <button className="add-friend-button" onClick={() => handleAddFriend('User1111')}>Add User as Friend</button>
          </div>
          <div className="post-image">
            <img src={lasagnaPic} alt="Lasagna" className="post-image-content" />
          </div>
          <div className="post-caption">
            Check out my homemade lasagna!
            <ExpandableCaption expanded={repliesVisible.discussion1} toggleExpand={() => setRepliesVisible(prevState => ({ ...prevState, discussion1: !prevState.discussion1 }))} />
          </div>
        </div>
        <div className="post">
        <div className="user-info">
          <h3>User2222 posted</h3>
          <button className="add-friend-button" onClick={() => handleAddFriend('User2222')}>Add User as Friend</button>
        </div>
          <div className="post-image">
            <img src={chocolatecake} alt="ChocolateCake" className="post-image-content" /> {}
          </div>
          <div className="post-caption">Delicious chocolate cake I made yesterday!</div>
        </div>

        {/* Discussion Posts */}
        <div className="discussion-post">
          <h4>What are your favorite quick dinner recipes?</h4>
          <p>I'm looking for some quick and easy dinner ideas for weeknights. What are your go-to recipes?</p>
          <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, discussion1: !prevState.discussion1 }))}>
            {repliesVisible.discussion1 ? 'Hide Replies' : 'Show Replies'}
          </button>
          {repliesVisible.discussion1 && (
            <div className="replies">
              <p><strong>User3333:</strong> I love making a quick stir-fry with whatever veggies I have on hand and some chicken or tofu.</p>
              <p><strong>User4444:</strong> Pasta with pesto and cherry tomatoes is always a hit in my house. Takes less than 20 minutes!</p>
            </div>
          )}
        </div>
        <div className="discussion-post">
          <h4>Best tips for baking perfect cookies?</h4>
          <p>I've been struggling to get my cookies just right. Any tips on how to bake the perfect cookies?</p>
          <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, discussion2: !prevState.discussion2 }))}>
            {repliesVisible.discussion2 ? 'Hide Replies' : 'Show Replies'}
          </button>
          {repliesVisible.discussion2 && (
            <div className="replies">
              <p><strong>User5555:</strong> Make sure your butter is at room temperature and don't overmix the dough!</p>
              <p><strong>User6666:</strong> Chilling the dough for at least an hour before baking makes a big difference in the texture.</p>
            </div>
          )}
        </div>

        {/* New Discussion Post with Poll */}
        <div className="discussion-post">
          <h4>Which recipe should I make tonight?</h4>
          <p>Like the title says, I'm wondering what I should make tonight?</p>
          
          {voted && (
            <p className="poll-ended">You have voted. See current results:</p>
          )}

          <div className="poll-results">
            {Object.keys(pollOptions).map(option => (
              <div key={option} className="poll-option">
                <div className="option-label">{pollOptions[option].label}</div>
                <div className="option-bar">
                  <div className="option-bar-fill" style={{ width: `${calculatePercentage(pollOptions[option].votes)}%` }}>
                    {calculatePercentage(pollOptions[option].votes)}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!voted && (
            <div className="poll-options">
              {Object.keys(pollOptions).map(option => (
                <button key={option} className="poll-button" onClick={() => handleVote(option)} disabled={voted}>
                  {pollOptions[option].label}
                </button>
              ))}
            </div>
          )}

          <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, discussion3: !prevState.discussion3 }))}>
            {repliesVisible.discussion3 ? 'Hide Replies' : 'Show Replies'}
          </button>
          {repliesVisible.discussion3 && (
            <div className="replies">
              {/* reply section */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
