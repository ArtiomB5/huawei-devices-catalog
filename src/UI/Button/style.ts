import styled from "styled-components";

export const button = styled.button<{ aDirection: string, comparison?: boolean }>`
  border: 2px solid rgba(0, 0, 0, 0.3);
  height: 40px;
  border-radius: 20px;
  padding: 0 10px;
  margin: 10px;
  cursor: pointer;
  font-weight: 700;

  animation-name: ${(props) => {
    if (props.aDirection === "") {
      return "none";
    } else if (props.aDirection === "over") {
      return "overAnimation";
    } else {
      return "outAnimation";
    }
  }};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-direction: ${(props) => props.aDirection};

  @keyframes overAnimation {
    from {
      border: 2px solid rgba(0, 0, 0, 0.3);
    }
    50% {
      border: 0 0 30px rgba(0, 0, 0, 0.6);
    }
    to {
      border: 2px solid rgba(0, 0, 0, 1);
    }
  }
  @keyframes outAnimation {
    from {
      border: 2px solid rgba(0, 0, 0, 1);
    }
    50% {
      border: 0 0 30px rgba(0, 0, 0, 0.6);
    }
    to {
      border: 2px solid rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: 768px) {
    display: ${(props) => props.comparison ? 'none' : 'block'};
  }
`;
