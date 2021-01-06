import React from 'react';

import {
  ArticleSection,
  ImgSimulator,
  ArticleTitle,
  Tags,
  Span,
  ArticleContent,
  Button,
} from './style';

import { ArticleDetails } from './ArticleDetails/index';
import { ArticleFooter } from './ArticleFooter/index';

import Data from '../../../../mockup/article.json';

export const MainSection = () => {
  //simulando un evento al usar el boton
  const handleButton = () => {
    alert('Articulo Guardado');
  };

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
      <ArticleContent dangerouslySetInnerHTML={{ __html: Data.content }} />
      <Button type="button" onClick={handleButton}>
        Guardar
      </Button>
      <ArticleFooter />
    </ArticleSection>
  );
};
