import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/App.css';

const mockData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = mockData.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredSuggestions)
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (name) => {
    navigate(`/detail/${name}`);
  };

  return (
    <div className="App">
      <h1>Search Bar with Suggestions</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.id} onClick={() => handleClick(suggestion.name)}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
