import React, { useState } from 'react';

import {
  CardContainer,
  CardImg,
  ImgContainer,
  Button,
  CardDetails,
  CardTitle,
  CardAuthor,
} from './style';

import { MdStarBorder, MdComment } from 'react-icons/md';
import { GrView } from 'react-icons/gr';

export const Card = ({ cover, title, author }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const views = () => {
    alert('WOW, Esta noticia tiene 75 Vistas');
  };

  const comment = () => {
    alert('Tu también deberías agregar un comentario :)');
  };

  return (
    <CardContainer>
      <ImgContainer>
        <CardImg src={cover} />
      </ImgContainer>
      <CardDetails>
        <CardTitle> {title} </CardTitle>
        <CardAuthor> Por: {author} </CardAuthor>
        <span> {count} </span>
        <Button type="button" onClick={handleCount}>
          <MdStarBorder />
        </Button>
        <span> 50 </span>
        <Button type="button" onClick={comment}>
          <MdComment />
        </Button>
        <span> 75 </span>
        <Button type="button" onClick={views}>
          <GrView />
        </Button>
      </CardDetails>
    </CardContainer>
  );
};
