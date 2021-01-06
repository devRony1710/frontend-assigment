import styled from 'styled-components';

export const HeaderSearcher = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: inherit;
`;

export const SearcherInput = styled.input`
  height: 35px;
  width: 75%;
  margin-left: 10px;
  border: none;
  border-bottom-right-radius: 20px;
`;

export const SearcherIcon = styled.div`
  display: flex;
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  background: white;
  border-top-left-radius: 12px;
`;
