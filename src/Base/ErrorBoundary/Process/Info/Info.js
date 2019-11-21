import React from 'react';
import { Band } from "./Band/Connector";

export const Info = ({ band }) => {
  return (
    <div className="Hire">
      <Band band={band} />
    </div>
  );
}