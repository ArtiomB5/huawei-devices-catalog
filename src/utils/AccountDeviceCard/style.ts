import styled from "styled-components";
import * as common from "../../styles/common";

export const Card = styled(common.flexColumn)`
  padding: 3px;
  font-weight: 700;
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
  border-radius: 13px;
  margin: 10px;
`;
export const img = styled.img`
  width: auto;
  height: 10vw;
  border-radius: 10px;
`;
