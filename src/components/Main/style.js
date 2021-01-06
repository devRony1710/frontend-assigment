import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 20px;
  height: auto;
  padding: 50px;
  background: #e1e1e1;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;
