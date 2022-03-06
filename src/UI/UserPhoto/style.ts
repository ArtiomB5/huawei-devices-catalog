import styled from "styled-components";

type paramsType = {
  imgUrl: string;
  diameterMM: string;
};

export const userPhoto = styled.div<{ paramas: paramsType }>`
  width: ${(props) => props.paramas.diameterMM};
  height: ${(props) => props.paramas.diameterMM};
  border-radius: 50%;
  background-image: url(${(props) => props.paramas.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
