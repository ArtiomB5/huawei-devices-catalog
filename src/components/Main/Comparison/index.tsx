import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootReducerType } from "../../../store";
import { RenderSmartphoneSpecs } from "../../../utils/RenderSmartphoneSpecs";
import { RenderTabletSpecs } from "../../../utils/RenderTabletSpecs";
import { RenderLaptopSpecs } from "../../../utils/RenderLaptopSpecs";
import { Button } from "../../../UI/Button";
import * as style from "./style";
import { RemoveDevice } from "../../../store/comparisonReducer";

export const Comparison = () => {
  let [visibility, setVisibility] = useState({
    smartphones: false,
    tablets: false,
    laptops: false,
  });

  let comparisonState = useSelector(
    (state: rootReducerType) => state.comparison
  );
  let dispatch = useDispatch();

  let smart1data = comparisonState.smartphone1;
  let smart2data = comparisonState.smartphone2;

  let tablet1data = comparisonState.tablet1;
  let tablet2data = comparisonState.tablet2;

  let laptop1data = comparisonState.laptop1;
  let laptop2data = comparisonState.laptop2;

  let clickHandler = (type: "smartphones" | "tablets" | "laptops" | "hide") => {
    setVisibility({
      smartphones: "smartphones" === type,
      tablets: "tablets" === type,
      laptops: "laptops" === type,
    });
  };

  return (
    <style.box>
      <style.buttonsRow>
        {comparisonState.smartphone1.id === "" &&
          comparisonState.smartphone2.id === "" &&
          comparisonState.tablet1.id === "" &&
          comparisonState.tablet2.id === "" &&
          comparisonState.laptop1.id === "" &&
          comparisonState.laptop2.id === "" &&
          "Please select the devices to compare."}
        {comparisonState.smartphone1.id !== "" &&
          comparisonState.smartphone2.id !== "" && (
            <>
              {!visibility.smartphones && (
                <Button buttonFunc={() => clickHandler("smartphones")}>
                  Compare Smartphones
                </Button>
              )}
              {visibility.smartphones && (
                <Button
                  buttonFunc={() => {
                    clickHandler("hide");
                    dispatch(RemoveDevice({ type: "smartphone" }));
                  }}
                >
                  Clear Smartphones Comparison
                </Button>
              )}
            </>
          )}
        {comparisonState.tablet1.id !== "" &&
          comparisonState.tablet2.id !== "" && (
            <>
              {!visibility.tablets && (
                <Button buttonFunc={() => clickHandler("tablets")}>
                  Compare Tablets
                </Button>
              )}
              {visibility.tablets && (
                <Button
                  buttonFunc={() => {
                    clickHandler("hide");
                    dispatch(RemoveDevice({ type: "tablet" }));
                  }}
                >
                  Clear Tablets Comparison
                </Button>
              )}
            </>
          )}
        {comparisonState.laptop1.id !== "" &&
          comparisonState.laptop2.id !== "" && (
            <>
              {!visibility.laptops && (
                <Button buttonFunc={() => clickHandler("laptops")}>
                  Compare Laptops
                </Button>
              )}
              {visibility.laptops && (
                <Button
                  buttonFunc={() => {
                    clickHandler("hide");
                    dispatch(RemoveDevice({ type: "laptop" }));
                  }}
                >
                  Clear Laptops Comparison
                </Button>
              )}
            </>
          )}
      </style.buttonsRow>
      <br />
      <style.wrapper>
        <style.buttonsRow>
          {visibility.smartphones && (
            <>
              <style.halfScreen>
                <style.name>{smart1data.name}</style.name>
                <RenderSmartphoneSpecs id={smart1data.id} />
              </style.halfScreen>
              <style.halfScreen>
                <style.name>{smart2data.name}</style.name>
                <RenderSmartphoneSpecs id={smart2data.id} />
              </style.halfScreen>
            </>
          )}
          {visibility.tablets && (
            <>
              <style.halfScreen>
                <style.name>{tablet1data.name}</style.name>
                <RenderTabletSpecs id={tablet1data.id} />
              </style.halfScreen>
              <style.halfScreen>
                <style.name>{tablet2data.name}</style.name>
                <RenderTabletSpecs id={tablet2data.id} />
              </style.halfScreen>
            </>
          )}
          {visibility.laptops && (
            <>
              <style.halfScreen>
                <style.name>{laptop1data.name}</style.name>
                <RenderLaptopSpecs id={laptop1data.id} />
              </style.halfScreen>
              <style.halfScreen>
                <style.name>{laptop2data.name}</style.name>
                <RenderLaptopSpecs id={laptop2data.id} />
              </style.halfScreen>
            </>
          )}
        </style.buttonsRow>
      </style.wrapper>
    </style.box>
  );
};
