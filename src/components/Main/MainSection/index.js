import React from 'react';

import {
  ArticleSection,
  ImgSimulator,
  ArticleTitle,
  Tags,
  Span,
} from './style';

import { ArticleDetails } from './ArticleDetails/index';

import Data from '../../../../mockup/article.json';

export const MainSection = () => {
  return (
    <ArticleSection>
      <ImgSimulator></ImgSimulator>
      <ArticleTitle dangerouslySetInnerHTML={{ __html: Data.title }} />
      <ArticleDetails hour="4 Horas" date="06/01/2021" time="5 min" />
      <Tags>
        <Span>Medicina Interna</Span>
        <Span>Pediatria</Span>
        <Span>Obstetricia</Span>
      </Tags>
      <div dangerouslySetInnerHTML={{ __html: Data.content }} />
    </ArticleSection>
  );
};
