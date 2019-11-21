import React from 'react';
import { FilterItem } from "./FilterItem/FilterItem";
import "./FilterViewer.scss";

export const FilterViewer = ({ filterArray }) => {
  return (
    <div className="FilterViewer">
      {filterArray.map(filterItem => (
        <FilterItem label={filterItem} key={filterItem} />
      ))}
    </div>
  );
}