import styled from "styled-components";
import * as common from "../../styles/common";

export const Loading = styled(common.flexColumn)`
  background-color: white;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  align-content: center;
  z-index: 100;
`;
export const LoadingLine = styled.div`
  height: 3px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    display: block;
    background: #E10027;
    height: 3px;
    width: 0;
    animation: getWidth 3s ease-in infinite;
  }

  @keyframes getWidth {
    100% {
      width: 100%;
    }
  }
`;

export const img = styled.img`
  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
`;