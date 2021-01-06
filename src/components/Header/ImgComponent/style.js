import styled from 'styled-components';

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const HeaderLogo = styled.img`
  object-fit: cover;

  @media screen and (max-width: 700px) {
    height: auto;
    width: 100%;
  }
`;
