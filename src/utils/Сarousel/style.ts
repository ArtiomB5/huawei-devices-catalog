import styled from "styled-components";
import * as common from "../../styles/common";

export const carousel = styled(common.flexRow)<{ imgUrl: string }>`
  width: 30vw;
  height: 65vh;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    @media (orientation: portrait) {
      width: 100vw;
      height: 100vh;
    }
    @media (orientation: landscape) {
      width: 100vw;
      height: 100vh;
      background-size: auto 100%;
    }
  }
`;

export const leftButton = styled(common.flexRow)<{ imgNumber: number }>`
  height: 100%;
  width: 10%;
  cursor: pointer;
  color: white;

  &:hover {
    color: ${(props) => (props.imgNumber !== 0 ? "gray" : "white")};
  }
`;

type rbpType = {
  imgNumber: number;
  arrayLength: number;
};

export const centerButton = styled.div`
  cursor: pointer;
  width: 30%;
  height: 100%;
`;

export const rightButton = styled(common.flexRow)<{ rbp: rbpType }>`
  height: 100%;
  width: 10%;
  cursor: pointer;
  color: white;

  &:hover {
    color: ${(props) =>
      props.rbp.imgNumber !== props.rbp.arrayLength - 1 ? "gray" : "white"};
  }
`;
