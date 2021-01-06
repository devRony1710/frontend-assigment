import React from 'react';
import { SidebarContainer, SidebarTitle } from './style';
import { Card } from './CardNews/index';

export const SideBar = () => {
  const coverImg =
    'https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80';

  return (
    <SidebarContainer>
      <SidebarTitle>Noticias Relacionadas</SidebarTitle>
      <Card
        cover={coverImg}
        title="Lorem Ipsum Dolor: Volutpat consequat"
        author="Rony Antolinez"
      />
      <Card
        cover={coverImg}
        title="Lorem Ipsum Dolor: Volutpat consequat"
        author="Rony Antolinez"
      />
      <Card
        cover={coverImg}
        title="Lorem Ipsum Dolor: Volutpat consequat"
        author="Rony Antolinez"
      />
      <Card
        cover={coverImg}
        title="Lorem Ipsum Dolor: Volutpat consequat"
        author="Rony Antolinez"
      />
    </SidebarContainer>
  );
};
