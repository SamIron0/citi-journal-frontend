import React, { useState } from 'react';

import '../css/Header.css';

function Header() {
    const [locationText, setInputText] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:8000/app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: locationText })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    }
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    }
  
    return (
  
        <div className="container">
          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search for a location" onChange={handleInputChange} className='search-input' value={locationText}/>
              <button className='search-button' type="submit">Search</button>
            </form>
          </div>

      </div>
    );  
}

export default Header;
