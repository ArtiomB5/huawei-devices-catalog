import {
  devicesStateType,
  SetStateTC
} from "../../store/devicesReducer";
import { CatalogCard } from "../../utils/CatalogCard";
import { MainBanner } from "./MainBanner";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loading } from "../../utils/Loading";
import { Comparison } from "./Comparison";
import { SetSpecsTC } from "../../store/specsReducer";
import { DeviceFullInfoCard } from "./DeviceFullInfoCard";
import { PetalSerch } from "./PetalSerch";
import * as style from "./style";
import { visibilityStateType } from "../../store/visibilityReducer";

type propsType = {
  devices: devicesStateType;
  visibility: visibilityStateType;
};

export const Main = (props: propsType) => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetStateTC());
    dispatch(SetSpecsTC());
  }, []);

  return (
    <style.main>
      {props.visibility.deviceFullInfoCard && <DeviceFullInfoCard />}
      {props.visibility.loading && <Loading />}
      {!props.visibility.loading && props.visibility.mainContent && (
        <>
          {props.devices.smartphones
            .filter((d) => d.Name === "HUAWEI Mate 40 Pro")
            .map((s) => {
              return (
                <MainBanner reverse={false} key={uuidv4()}>
                  {s}
                </MainBanner>
              );
            })}
          {props.devices.tablets
            .filter((d) => d.Name === "MatePad Pro")
            .map((t) => {
              return (
                <MainBanner reverse={true} key={uuidv4()}>
                  {t}
                </MainBanner>
              );
            })}
          {props.devices.laptops
            .filter((d) => d.Name === "HUAWEI MateBook X Pro")
            .map((l) => {
              return (
                <MainBanner reverse={false} key={uuidv4()}>
                  {l}
                </MainBanner>
              );
            })}
        </>
      )}
      {props.visibility.smartphones && (
        <>
          {props.devices.smartphones.map((s) => {
            return <CatalogCard key={uuidv4()}>{s}</CatalogCard>;
          })}
        </>
      )}
      {props.visibility.tablets && (
        <>
          {props.devices.tablets.map((s) => {
            return <CatalogCard key={uuidv4()}>{s}</CatalogCard>;
          })}
        </>
      )}
      {props.visibility.laptops && (
        <>
          {props.devices.laptops.map((s) => {
            return <CatalogCard key={uuidv4()}>{s}</CatalogCard>;
          })}
        </>
      )}
      {props.visibility.comparison && <Comparison />}
      {props.visibility.serch && <PetalSerch />}
    </style.main>
  );
};
