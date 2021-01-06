import React from 'react';
import {
  FooterContainer,
  FooterCopyright,
  FooterDetails,
  FooterImgContainer,
  FooterLink,
} from './style';

import { MdCopyright } from 'react-icons/md';

import Logo from '../../../assets/static/Logo.png';

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterImgContainer>
          <img src={Logo} alt="logo" />
        </FooterImgContainer>
        <FooterDetails>
          <FooterLink href="/">Preguntas Frecuentes</FooterLink>
          <FooterLink href="/">Contactanos</FooterLink>
          <FooterLink href="/">Información</FooterLink>
          <FooterCopyright>
            Docred <MdCopyright /> 2021 All Rights Reserve
          </FooterCopyright>
        </FooterDetails>
      </FooterContainer>
    </footer>
  );
};
