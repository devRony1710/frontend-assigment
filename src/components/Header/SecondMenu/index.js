import React from 'react';

import { SecondMenuContainer, ImgProfile } from './style';

import { MdNotificationsNone, MdSettings } from 'react-icons/md';

import DEFAULT_IMG from '../../../../assets/static/me2.png';

export const SecondMenu = () => {
  return (
    <SecondMenuContainer>
      <a href="/">
        <MdNotificationsNone color="white" />
      </a>
      <a href="/">
        <ImgProfile src={DEFAULT_IMG} />
      </a>
      <a href="/">
        <MdSettings color="white" />
      </a>
    </SecondMenuContainer>
  );
};
