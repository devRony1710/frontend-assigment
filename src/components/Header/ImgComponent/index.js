import React from 'react';

import Logo from '../../../../assets/static/Logo.png';

import { ImgContainer, HeaderLogo } from './style';

export const HeaderImg = () => {
  return (
    <ImgContainer>
      <HeaderLogo src={Logo} />
    </ImgContainer>
  );
};
