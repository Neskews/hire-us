import React from 'react';
import "./Button.scss";

export const Button = ({ label, onClick }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export const SecondaryButton = ({ label, onClick }) => {
  return (
    <button
      className="btn secondary"
      onClick={onClick}
    >
      {label}
    </button>
  )
}