import React from 'react';
import {
  SecondaryButton
} from "../../../../../Components/Button/Button";
import "./Interact.scss";

export const Interact = ({ onGoToInfo, bandName}) => {
  return (
    <div className="Interact">
      <SecondaryButton label="anfragen" />
      <SecondaryButton
        label="info"
        onClick={() => onGoToInfo(bandName)}
      />
    </div>
  );
}