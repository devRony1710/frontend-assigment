import React from 'react';

import { ArticleEvents, EventsButtons } from './style';

import { MdStarBorder, MdInsertComment, MdShare } from 'react-icons/md';

export const ArticleFooter = () => {
  return (
    <ArticleEvents>
      <EventsButtons type="button">
        {' '}
        <MdStarBorder color="lightblue" /> Destacar
      </EventsButtons>
      <EventsButtons type="button">
        {' '}
        <MdInsertComment color="lightblue" /> Comentar
      </EventsButtons>
      <EventsButtons type="button">
        {' '}
        <MdShare color="lightblue" /> Compartir
      </EventsButtons>
    </ArticleEvents>
  );
};
