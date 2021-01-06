import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 30% 15% 30%;
  background: #1d80c7;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
  }
`;
