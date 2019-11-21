import React from 'react';
import "./Tag.scss";

export const Tag = ({ tag }) => {
  return (
    <span className="Tag">#{tag} </span>
  )
}