import React from 'react';
import "./FilterItem.scss";

export const FilterItem = ({ label }) => {
  return (
    <div className="FilterItem">
      -{label}
    </div>
  );
}