import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="page-loading-wrapper">
      <div className="spinner" />
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
