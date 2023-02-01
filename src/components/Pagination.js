import React from 'react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className='pg-component mb-5 mt-2'>
      {gotoPrevPage && (
        <button className='pagination' onClick={gotoPrevPage}>
          {' '}
          <strong>Previous</strong>{' '}
        </button>
      )}
      {gotoNextPage && (
        <button className='pagination' onClick={gotoNextPage}>
          {' '}
          <strong>Next</strong>{' '}
        </button>
      )}
    </div>
  );
}
