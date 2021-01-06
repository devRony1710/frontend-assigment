import styled from 'styled-components';

export const SecondMenuContainer = styled.div`
  border-left: 1px solid #fff;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px 0;

  & a {
    margin: 0 10px;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const ImgProfile = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  object-fit: cover;
`;
