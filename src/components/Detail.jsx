import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { name } = useParams();

  return (
    <div className="App">
      <h1>Detail Page</h1>
      <p>You selected: {name}</p>
    </div>
  );
};

export default Detail;
