import React from 'react';
import { Name } from "./Name/Name";
import { getTags } from "../../../../../api/selectors/selectors";

export const Band = ({ band }) => {
  return (
    <div className="Band">
      <Name name={band.name} />
    </div>
  );
}