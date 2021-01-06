import React from 'react';

import { ArticleSection, ImgSimulator, ArticleTitle } from './style';
import Data from '../../../../mockup/article.json';

export const MainSection = () => {
  return (
    <ArticleSection>
      <ImgSimulator></ImgSimulator>
      <ArticleTitle dangerouslySetInnerHTML={{ __html: Data.title }} />
    </ArticleSection>
  );
};
