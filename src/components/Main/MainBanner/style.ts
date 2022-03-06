import styled from "styled-components";
import * as common from "../../../styles/common";

export const mainBanner = styled(common.flexRow)<{ reverse: boolean }>`
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media (max-width: 768px) {
    flex-direction: column-reverse;

    @media (orientation: landscape) {
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    }
  }
`;

export const bannerTextBlock = styled(common.flexColumn)`
  width: 50vw;
  height: 50vh;
  text-align: center;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const buttons = styled(common.flexRow)``;

export const bannerImgBlock = styled(common.flexColumn)<{ imgUrl: string }>`
  width: 50vw;
  height: 50vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: none-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    width: 100%;
    @media (orientation: portrait) {
      background-size: cover;
      height: 35vh;
    }
    @media (orientation: landscape) {
      background-size: cover;
    }
  }
`;

export const img = styled.img<{ smartphones: boolean; reverse: boolean }>`
  position: relative;
  right: ${(props) => (props.reverse ? "-25vw" : "25vw")};
  width: ${(props) => (props.smartphones ? "auto" : "20vw")};
  height: ${(props) => (props.smartphones ? "20vw" : "auto")};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const h2 = styled.h2`
  font-weight: 700;
  margin: 5px;
`;
