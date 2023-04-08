import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchResList = ({ result }) => {
  const navigateTo = useNavigate();

  const handleCardClick = (url) => {
    const id = url.match(/\/(\d+)/)[1];
    navigateTo(`/pokemon/${id}`);
    window.location.reload();
  };

  return (
    <div className='res-list' id='list'>
      {result.map((p) => (
        <div key={p.url} onClick={() => handleCardClick(p.url)}>
          {p.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResList;
