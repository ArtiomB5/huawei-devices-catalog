import { useDispatch, useSelector } from "react-redux";
import {
  SetVisibility,
  Show,
  visibilityStateType,
} from "../../store/visibilityReducer";
import { rootReducerType } from "../../store";
import * as style from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { setMenuVisibilityAC } from "../../store/menuButtonRedcuer";

type propsType = {
  visibility: visibilityStateType;
};

export const Header = (props: propsType) => {
  const [menu, setMenu] = useState(false);
  let dispatch = useDispatch();
  let comparisonState = useSelector(
    (state: rootReducerType) => state.comparison
  );
  let menuVisibility = useSelector((state: rootReducerType) => state.menuVisibility);
  let onClickHandler = (
    deviceType: "mainContent" | "smartphones" | "tablets" | "laptops"
  ) => {
    dispatch(SetVisibility(deviceType));
  };
  let comparisonDevicesCheck = () => {
    if (
      comparisonState.smartphone1.id !== "" ||
      comparisonState.smartphone2.id !== "" ||
      comparisonState.tablet1.id !== "" ||
      comparisonState.tablet2.id !== "" ||
      comparisonState.laptop1.id !== "" ||
      comparisonState.laptop2.id !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const logo = require("../../imgs/logo.png");

  const getButtons = (visParam: boolean) => {
    return (
      <style.menuButtonWrapper visibility={visParam}>
        <style.headerButton
          underline={props.visibility.mainContent}
          onClick={() => {
            onClickHandler("mainContent");
          }}
        >
          Main
        </style.headerButton>

        <style.headerButton
          underline={props.visibility.smartphones}
          onClick={() => {
            onClickHandler("smartphones");
          }}
        >
          Smartphones
        </style.headerButton>

        <style.headerButton
          underline={props.visibility.tablets}
          onClick={() => {
            onClickHandler("tablets");
          }}
        >
          Tablets
        </style.headerButton>
        
        <style.headerButton
          underline={props.visibility.laptops}
          onClick={() => {
            onClickHandler("laptops");
          }}
        >
          Laptops
        </style.headerButton>

        <style.headerButtonComparison
          underline={props.visibility.comparison}
          onClick={() => {
            dispatch(Show("SHOW_COMPARISON"));
          }}
        >
          Comparison
          {comparisonDevicesCheck() && (
            <style.comparisonMark></style.comparisonMark>
          )}
        </style.headerButtonComparison>

        <style.headerButton
          underline={props.visibility.serch}
          onClick={() => {
            dispatch(Show("SHOW_SEARCH"));
          }}
        >
          <img
            src="https://i.pinimg.com/originals/7f/33/16/7f3316ae0c2b55ffb553a84c0f207b2e.png"
            alt="Petal Search"
            style={{ height: "50px", width: "auto" }}
          />
        </style.headerButton>
      </style.menuButtonWrapper>
    );
  };

  const menuHandler = () => {
    setMenu(menu => !menu);
    dispatch(setMenuVisibilityAC(menu));
  }

  return (
    <style.header>
      <style.menuColumn>
        <style.menuRow>
          <style.headerLogoWrapper
            onClick={() => {
              onClickHandler("mainContent");
            }}
          >
            <style.headerLogo src={logo} alt="Huawei Logo" />
          </style.headerLogoWrapper>

          {getButtons(false)}

          <style.phoneMenuButton onClick={menuHandler}>
            <AiOutlineMenu size={30} />
          </style.phoneMenuButton>
        </style.menuRow>

        {menu && !menuVisibility.showMenu && getButtons(true)}
        
      </style.menuColumn>
    </style.header>
  );
};
