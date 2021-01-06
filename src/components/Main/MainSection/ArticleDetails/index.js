import React from 'react';

import DEFAULT_IMG from '../../../../../assets/static/me2.png';

import {
  DetailsContainer,
  DetailsImg,
  ContainerImg,
  DetailsDescription,
  DetailsTitle,
  Details,
} from './style';

export const ArticleDetails = ({ hour, date, time }) => {
  return (
    <>
      <DetailsContainer>
        <ContainerImg>
          <DetailsImg src={DEFAULT_IMG} />
        </ContainerImg>
        <DetailsDescription>
          <DetailsTitle>DocRed</DetailsTitle>
          <Details>
            Hace: {hour} | Publicado: {date} | Lectura {time}{' '}
          </Details>
        </DetailsDescription>
      </DetailsContainer>
    </>
  );
};
