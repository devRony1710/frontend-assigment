import React from 'react';
import { GlobalStyle } from '../../GlobalStyles';
import { Header } from '../components/Header/index';
import { Main } from '../components/Main/index';

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};
