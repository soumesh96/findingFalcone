import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(90vh - 50px);
  > div {
    border: 1px solid black;
    width: 60%;
    padding: 20px 12px;
  }
  @media (max-width: 768px) {
    > div {
      width: 90%;
    }
  }
`;

export const LoaderWrapper = styled.div`
  background: black;
  opacity: 0.5;
  min-height: calc(90vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  margin-top: 12px;
  width: 40%;
  padding: 12px;
  background: transparent;
  box-shadow: 4px 6px #888888;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #9da1b9;
    font-weight: 600;
  }
`;

export const TextWrapper = styled.p`
  font-size: 18px;
  > span {
    font-weight: 600;
  }
`;