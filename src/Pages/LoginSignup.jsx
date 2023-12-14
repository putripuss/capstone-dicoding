import React, { useState } from 'react';

const StarRating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= value ? 'gold' : 'gray' }}
          onClick={() => onChange(star)}
        >
          &#9733; {/* Unicode character for a solid star */}
        </span>
      ))}
    </div>
  );
};

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [review, setReview] = useState({ name: '', rating: 0, comment: '' });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      setLoggedIn(true);
    }
  };

  const handleReviewSubmit = () => {
    
    console.log('Review submitted:', review);
    
  };

  const handleNameChange = (e) => {
    setReview({ ...review, name: e.target.value });
  };

  const handleRatingChange = (value) => {
    setReview({ ...review, rating: value });
  };

  const handleCommentChange = (e) => {
    setReview({ ...review, comment: e.target.value });
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />

            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />

            <button type="button" onClick={handleLogin} style={{ marginTop: '10px' }}>
              Login
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Give a Review</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name:</label>
            <input type="text" value={review.name} onChange={handleNameChange} />

            <label>Rating:</label>
            <StarRating value={review.rating} onChange={handleRatingChange} />

            <label>Comment:</label>
            <textarea value={review.comment} onChange={handleCommentChange} />

            <button type="button" onClick={handleReviewSubmit} style={{ marginTop: '10px' }}>
              Submit Review
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
