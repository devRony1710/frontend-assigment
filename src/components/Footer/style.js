import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background: #1d80c7;
  height: 100px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    height: 200px;
  }
`;

export const FooterImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const FooterCopyright = styled.p`
  color: #fff;
`;
