import React from 'react';
import "./Small.scss";

export const Small = ({ label, isFetching }) => {
  return (
    <div className="Small">
      <span>{label}</span>
      <span>{isFetching ? "Lädt" : ""}</span>
    </div>
  );
}