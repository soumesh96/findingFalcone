import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #9da1b9;
  height: 60px;
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
    }
`;

export const Heading = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-right: 30%;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 10%;
  }
`;

export const RightHeader = styled.div`
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    cursor: pointer;
  }
  & div:first-child {
    border-right: 2px solid black;
    padding-right: 20px;
  }
  & div:last-child {
    padding-left: 20px;
  }
`;