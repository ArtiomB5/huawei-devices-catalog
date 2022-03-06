import styled from "styled-components";
import * as common from '../../../styles/common'

export const petalSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const input = styled(petalSearch)`
  flex-direction: row;
  border: 1px solid black;
  height: 48px;
  width: 80vw;
  border-radius: 24px;
  margin: 10px;
  background: white;
`;
export const textArea = styled.textarea`
  width: calc(98% - 30px);
  height: 100%;
  line-height: 44px;
  border: none;
  overflow: hidden;
  outline: none;
  background-color: transparent;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
`;
export const button = styled.button`
  width: 30px;
  cursor: pointer;
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

export const img = styled.img`
  width: 20vw;
  height: auto;
`;

export const cell = styled(common.flexColumn)`

`;

export const h1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;