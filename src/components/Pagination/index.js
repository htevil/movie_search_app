// Pagination.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const Pagination = ({ totalPages, handlePageChange }) => {
  const { currentPage } = useSelector(state => state.movies);
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  if (totalPages <= 1) return null; // No pagination needed if there's only one page

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    handlePageChange(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <div className="pagination" style={{ fontSize: '18px', margin: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px' }}>
      {currentPage > 1 && (
        <button 
          className="pagination-button" 
          style={{ width: '65px' }} 
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button ${pageNumber === activePage ? 'active' : ''}`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button 
          className="pagination-button" 
          style={{ width: '40px' }} 
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
