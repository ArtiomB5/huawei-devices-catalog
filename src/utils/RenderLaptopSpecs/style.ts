import styled from "styled-components";
import * as common from "../../styles/common";

export const wrapper = styled(common.flexColumn)`
  justify-content: space-around;
`;

export const subTitle = styled.h3`
    font-weight: 700;
    margin-bottom: 10px;
`;

export const cell = styled(common.flexColumn)<{ height: number }>`
  height: ${(props) => `${props.height}px`};
  width: 100%;
  text-align: center;
`;
