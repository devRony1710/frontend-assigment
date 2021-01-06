import React from 'react';
import { GlobalStyle } from '../../GlobalStyles';
import { Header } from '../components/Header/index';
import { Main } from '../components/Main/index';
import { Footer } from '../components/Footer/index';

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};
