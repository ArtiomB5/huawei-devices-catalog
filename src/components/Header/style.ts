import styled from "styled-components";
import * as common from "../../styles/common";

export const header = styled(common.flexRow)`
  justify-content: space-around;
  align-items: stretch;
  font-weight: 700;
  font-size: 15px;
  border: 1px solid transparent;
  width: 100vw;
`;
export const headerTitle = styled.div``;
export const headerLogo = styled.img`
  height: 50px;
  width: auto;
`;
export const headerLogoWrapper = styled(common.flexColumn)`
  cursor: pointer;
`;
export const headerButton = styled(common.flexRow)<{ underline: boolean }>`
  cursor: pointer;
  height: 100%;
  border-bottom: ${(props) => (props.underline ? "2px solid black" : "none")};
`;
export const headerButtonComparison = styled(headerButton)`
  cursor: pointer;
  height: 100%;
  border-bottom: ${(props) => (props.underline ? "2px solid black" : "none")};

  @media (max-width: 768px) {
    display: none;
  }
`;
export const cartQuantity = styled(common.flexColumn)`
  height: 1.5vw;
  width: 1.5vw;
  border-radius: 0.45vw;
  background: rgb(232, 76, 102);
  background: linear-gradient(
    180deg,
    rgba(232, 76, 102, 1) 0%,
    rgba(211, 46, 58, 1) 100%
  );
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  color: white;
  position: relative;
  bottom: 0.8vw;
`;
export const comparisonMark = styled(common.flexColumn)`
  height: 0.7vw;
  width: 0.7vw;
  border-radius: 0.2vw;
  background: rgb(232, 76, 102);
  background: linear-gradient(
    180deg,
    rgba(232, 76, 102, 1) 0%,
    rgba(211, 46, 58, 1) 100%
  );
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  position: relative;
  bottom: 0.8vw;
`;
export const menuRow = styled(common.flexRow)`
  width: 100%;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const menuColumn = styled(common.flexColumn)`
  width: 100%;
`;
export const menuButtonWrapper = styled(common.flexRow)<{visibility: boolean}>`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  display: ${(props) => (props.visibility ? "none" : "flex")};
  @media (max-width: 768px) {
    display: ${(props) => (props.visibility ? "flex" : "none")};
    flex-direction: ${(props) => (props.visibility ? "column" : "row")};
    justify-content: space-around;
    height: 82vh;
    font-size: 5vh;
  }
`;
export const desktopButtonsWrapper = styled(common.flexRow)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const phoneMenuButton = styled(common.flexColumn)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
