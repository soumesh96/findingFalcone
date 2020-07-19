import styled from 'styled-components';

export const HomeConWrapper = styled.div`
  min-height: calc(90vh - 90px);
`;

export const LoaderWrapper = styled.div`
  background: black;
  opacity: 0.5;
  min-height: calc(90vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageWrapper = styled.div`
  padding: 12px;
  margin: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const DestinationWrapper = styled.div`
  width: 20%;
  @media(max-width: 768px) {
    width: 90%;
  }
  > label {
    padding-left: 6px;
  }
  > div {
    margin-top: 12px;
  }
`;

export const VehicleSelectionWrapper = styled.div`
  text-align: left;
  height: 18vh;
  @media (max-width: 768px) {
    height: auto;
    display: flex;
    justify-content: center;
    margin: 12px 20px;
  }
`;

export const DetailsWrapper = styled.div`
  margin: auto;
  border: 1px solid black;
  padding: 20px 12px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  @media (max-width: 768px) {
    margin-bottom: 24px;
    width: 80%;
  }
`;

export const TextWrapper = styled.label`
  font-size: 18px;
  > span {
    font-weight: 600;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
  ${props => props.disabled &&
    `
      cursor: not-allowed;
      &:hover {
        background: transparent;
        font-weight: normal;
      }
    `
  }
`;

export const Wrapper = styled.div`
width: 300px;
height: 200px;
background-color: grey;
@media (max-width: 600px) {
background-color: black;
}
margin: auto;
position: relative;
`;
