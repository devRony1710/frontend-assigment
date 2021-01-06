import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  border-radius: 20px;
  background: #fff;
  margin: 15px 0;
  height: auto;
  padding: 30px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    width: auto;
    padding: 10px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const CardImg = styled.img`
  border-radius: 20px;
  height: 80%;
  width: 80%;
  @media screen and (max-width: 700px) {
    height: 200px;
    width: 200px;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const CardDetails = styled.div``;

export const CardTitle = styled.h3`
  font-style: italic;
`;

export const CardAuthor = styled.p`
  color: #a9a9a9;
`;
