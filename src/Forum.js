import React, { useState, useEffect } from 'react';
import './Forum.css';
import lasagnaPic from './images/lasagna.png';
import chocolatecake from './images/chocolatecake.png';
import PostPictureForm from './PostPictureForm.js';
import DiscussionForm from './DiscussionForm.js'; 

const Forum = () => {
  const [repliesVisible, setRepliesVisible] = useState({});
  const [pollOptions, setPollOptions] = useState({
    option1: { label: 'Lasagna', votes: 0 },
    option2: { label: 'Chocolate Cake', votes: 0 },
    option3: { label: 'Stir-fry', votes: 0 },
    option4: { label: 'Pasta with Pesto', votes: 0 },
  });
  const [voted, setVoted] = useState(false);
  const [showPostPictureForm, setShowPostPictureForm] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    localStorage.setItem('pollOptions', JSON.stringify(pollOptions));
  }, [pollOptions]);

  const handleVote = (option) => {
    if (!voted) {
      setPollOptions(prevOptions => {
        const updatedOptions = { ...prevOptions };
        updatedOptions[option] = {
          ...updatedOptions[option],
          votes: updatedOptions[option].votes + 1,
        };
        return updatedOptions;
      });
      setVoted(true);
    }
  };

  const calculatePercentage = (votes) => {
    const totalVotes = Object.values(pollOptions).reduce((acc, option) => acc + option.votes, 0);
    return totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(2) : 0;
  };

  const handlePostSubmit = (post) => {
    setPosts([...posts, post]);
    setShowPostPictureForm(false); // hide form after submission
    setShowDiscussionForm(false); 
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index)); 
  };

  const handleAddFriend = (username) => {
    alert(`Friend request sent to ${username}`);
  };

  const ExpandableCaption = ({ expanded, toggleExpand }) => (
    <div className="expandable-caption">
      <p>{expanded ? 'Cook and drain the ground beef, then stir in the spaghetti sauce and simmer. Combine the cottage cheese, 2 cups of mozzarella, eggs, half of the Parmesan, and seasonings. Assemble the lasagna. Bake, covered, for 45 minutes. Uncover and continue baking for 10 minutes.1 pound lean ground beef, 1 (32 ounce) jar spaghetti sauce, 32 ounces cottage cheese, 3 cups shredded mozzarella cheese divided, 2 eggs, ½ cup grated Parmesan cheese, 2 teaspoons dried parsley, salt to taste, ground black pepper to taste, 9 lasagna noodles, ½ cup water' : 'Press "Show Caption" to see the recipe description!'}</p>
      <button onClick={toggleExpand}>
        {expanded ? 'Hide Caption' : 'Show Caption'}
      </button>
    </div>
  );

  return (
    <div className="forum-container">
      <h2>Post your food creation and even share the recipe! Start a discussion post to chat with fellow foodies or reply to an existing one! No account required.</h2>
      <div className="post-buttons">
        <button className="post-button" onClick={() => setShowPostPictureForm(true)}>Post a Picture</button>
        <button className="post-button" onClick={() => setShowDiscussionForm(true)}>Start a Discussion</button>
      </div>

      {showPostPictureForm && (
        <PostPictureForm onSubmit={handlePostSubmit} onClose={() => setShowPostPictureForm(false)} />
      )}

      {showDiscussionForm && (
        <DiscussionForm onSubmit={handlePostSubmit} onClose={() => setShowDiscussionForm(false)} />
      )}

      <div className="posts">
        {posts.map((post, index) => (
          <div className={`post ${post.type === 'poll' ? 'poll-post' : 'discussion-post'}`} key={index}>
            <div className="user-info">
              {post.type !== 'poll' && (
                <>
                  <h3>{post.user || 'Anonymous'}</h3>
                  <button className="add-friend-button" onClick={() => handleAddFriend(post.user)}>Add User as Friend</button>
                  <button className="delete-post-button" onClick={() => handleDeletePost(index)}>Delete Post</button>
                </>
              )}
            </div>
            {post.type === 'picture' && (
              <div className="post-image">
                <img src={URL.createObjectURL(post.picture)} alt="Post" className="post-image-content" />
              </div>
            )}
            {post.type === 'discussion' && (
              <div className="discussion-post-content">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, [`discussion${index}`]: !prevState[`discussion${index}`] }))}>
                  {repliesVisible[`discussion${index}`] ? 'Hide Replies' : 'Show Replies'}
                </button>
                {repliesVisible[`discussion${index}`] && (
                  <div className="replies">
                    {/* show replies here!! */}
                  </div>
                )}
              </div>
            )}
            {post.type === 'poll' && (
              <div className="poll-post-content">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                {voted && <p className="poll-ended">You have voted. See current results:</p>}
                <div className="poll-results">
                  {Object.keys(post.options).map((option) => (
                    <div key={option} className="poll-option">
                      <div className="option-label">{post.options[option].label}</div>
                      <div className="option-bar">
                        <div className="option-bar-fill" style={{ width: `${calculatePercentage(post.options[option].votes)}%` }}>
                          {calculatePercentage(post.options[option].votes)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {!voted && (
                  <div className="poll-options">
                    {Object.keys(post.options).map((option) => (
                      <button key={option} className="poll-button" onClick={() => handleVote(option)} disabled={voted}>
                        {post.options[option].label}
                      </button>
                    ))}
                  </div>
                )}
                <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, [`poll${index}`]: !prevState[`poll${index}`] }))}>
                  {repliesVisible[`poll${index}`] ? 'Hide Replies' : 'Show Replies'}
                </button>
                {repliesVisible[`poll${index}`] && (
                  <div className="replies">
                    {/* reply section */}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Example static posts for visual purposes*/}
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
            <img src={chocolatecake} alt="ChocolateCake" className="post-image-content" />
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


        
        <div className="post">
          <div className="poll-post-content">
            <h4>Help me decide what to cook tonight!</h4>
            <p>Like the title says, I'm wondering what I should make tonight?</p>
            {voted && <p className="poll-ended">You have voted. See current results:</p>}
            <div className="poll-results">
              {Object.keys(pollOptions).map((option) => (
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
                {Object.keys(pollOptions).map((option) => (
                  <button key={option} className="poll-button" onClick={() => handleVote(option)} disabled={voted}>
                    {pollOptions[option].label}
                  </button>
                ))}
              </div>
            )}
            <button className="replies-toggle" onClick={() => setRepliesVisible(prevState => ({ ...prevState, [`poll${1}`]: !prevState[`poll${1}`] }))}>
              {repliesVisible[`poll${1}`] ? 'Hide Replies' : 'Show Replies'}
            </button>
            {repliesVisible[`poll${1}`] && (
              <div className="replies">
                {/* reply section */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
