import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/${inputValue.trim()}`);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Enter Your ID</h1>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="e.g., SR007204-22644-SPL004"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Go
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
