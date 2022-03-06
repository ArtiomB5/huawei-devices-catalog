import { useState } from "react";
import * as style from "./style";

interface IButton {
  buttonFunc: () => void;
  comparison?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  let [animationDirection, setAnimationDirection] = useState("");

  const mouseOverHandler = () => {
    setAnimationDirection("over");
  };
  const mouseOutHandler = () => {
    setAnimationDirection("out");
  };

  return (
    <style.button
      onClick={props.buttonFunc}
      aDirection={animationDirection}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      comparison={props.comparison}
    >
      {props.children}
    </style.button>
  );
};
