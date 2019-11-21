import React from 'react';
import { Small } from "../../../../Components/Headline/Small/Small";
import { FilterViewer } from "./FilterViewer/FilterViewer";

export const Heading = ({ filterArray }) => {
  return (
    <div className="Heading">
      <Small label="Deine Suche" />
      <FilterViewer filterArray={filterArray} />
    </div>
  );
}