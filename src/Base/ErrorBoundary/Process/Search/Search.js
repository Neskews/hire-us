import React from 'react';
import { Button } from "../../../Components/Button/Button";
import { Filter } from './Filter/Filter';
import { Small } from "../../../Components/Headline/Small/Connector";

const EVENTS = [
  "Hochzeit",
  "Geburtstag",
  "Weihnachtsfeier"
];

const KINDS = [
  "Country",
  "Classic",
  "Jazz"
];

export const OPTIONS = {
  kinds: KINDS,
  events: EVENTS
}

export const Search = ({
  onGoToBands,
  onSetKindFilter,
  onSetEventFilter,
  event,
  kind
}) => {
  return (
    <div>
      <Small label="Deine Filter" />
      <Filter
        options={OPTIONS.events}
        onSelect={onSetEventFilter}
        label={event || "Events"}
      />
      <Filter
        options={OPTIONS.kinds}
        onSelect={onSetKindFilter}
        label={kind || "Art"}
      />
      <Button label={"Musiker finden"} onClick={onGoToBands} />
    </div>
  );
}