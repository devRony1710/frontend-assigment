import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 50%;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DetailsDescription = styled.div`
  margin-left: 30px;
`;

export const DetailsTitle = styled.h4`
  font-weight: bold;
`;

export const Details = styled.p`
  margin-top: -15px;
  color: #565656;
`;
