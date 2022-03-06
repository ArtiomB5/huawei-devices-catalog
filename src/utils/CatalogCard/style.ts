import styled from "styled-components";
import * as common from "../../styles/common";

export const catalogCard = styled(common.flexRow)`
  justify-content: space-around;
  align-items: stretch;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px 0;
  width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const features = styled(common.flexColumn)`
  justify-content: space-between;
  flex-grow: 2;
`;

export const cardTextAndButtons = styled(common.flexColumn)`
  flex-shrink: 2;
  border: none;
  font-weight: 700;
  text-align: center;
`;

export const cardButtons = styled(common.flexRow)``;

export const nameAndImg = styled(cardTextAndButtons)``;

export const img = styled.img`
  height: 30vh;
  width: auto;
`;

export const cartAndComparisonInfo = styled(common.flexColumn)``;
