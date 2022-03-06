import { useSelector } from "react-redux";
import { rootReducerType } from "../../../store";
import { Carousel } from "../../../utils/Сarousel";
import { RenderSmartphoneSpecs } from "../../../utils/RenderSmartphoneSpecs";
import { RenderTabletSpecs } from "../../../utils/RenderTabletSpecs";
import { RenderLaptopSpecs } from "../../../utils/RenderLaptopSpecs";
import { AddDeviceToComparison } from "../../../utils/AddDeviceToComparison";
import { deviceType } from "../../../store/devicesReducer";
import * as style from "./style";

export const DeviceFullInfoCard = () => {
  let { deviceId, type } = useSelector(
    (state: rootReducerType) => state.deviceFullInfoCard
  );
  let deviceContent = useSelector(
    (state: rootReducerType) =>
      state.devices[type].filter((d: deviceType) => d.DeviceID === deviceId)[0]
  );

  return (
    <style.fullInfoCard>
      <style.h1>{deviceContent.Name}</style.h1>
      <>
        <style.buttons>
          <AddDeviceToComparison
            id={deviceContent.DeviceID}
            name={deviceContent.Name}
            type={deviceContent.Type}
          />
        </style.buttons>
        <style.h3>{deviceContent.Features.join(" | ")}</style.h3>
        <Carousel imgs={deviceContent.ImageLinks} name={deviceContent.Name} />
        {deviceContent.Type === "smartphones" && (
          <RenderSmartphoneSpecs id={deviceContent.DeviceID} />
        )}
        {deviceContent.Type === "tablets" && (
          <RenderTabletSpecs id={deviceContent.DeviceID} />
        )}
        {deviceContent.Type === "laptops" && (
          <RenderLaptopSpecs id={deviceContent.DeviceID} />
        )}
      </>
    </style.fullInfoCard>
  );
};
