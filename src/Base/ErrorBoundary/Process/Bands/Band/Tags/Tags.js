import React from 'react';
import { Tag } from './Tag/Tag';

export const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  )
}