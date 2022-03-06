import { useState } from "react";
import * as style from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PropsType = {
  imgs: string[];
  name: string;
};

export const Carousel = (props: PropsType) => {
  let [state, setState] = useState(0);

  const leftClickHandler = () => {
    if (state - 1 < 0) {
      setState(0);
    } else {
      setState(state - 1);
    }
  };

  const rightClickHandler = () => {
    if (state + 1 > props.imgs.length - 1) {
      setState(props.imgs.length - 1);
    } else {
      setState(state + 1);
    }
  };

  return (
    <style.carousel imgUrl={props.imgs[state]}>
      <style.leftButton onClick={leftClickHandler} imgNumber={state}>
        <FaChevronLeft />
      </style.leftButton>
      <style.rightButton
        onClick={rightClickHandler}
        rbp={{ imgNumber: state, arrayLength: props.imgs.length }}
      >
        <FaChevronRight />
      </style.rightButton>
    </style.carousel>
  );
};
