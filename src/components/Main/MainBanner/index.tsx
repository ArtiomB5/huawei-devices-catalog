import { v4 as uuidv4 } from "uuid";
import * as style from "./style";
import { OpenDeviceFullInfoCard } from "../../../utils/OpenDeviceFullInfoCard";
import { deviceType } from "../../../store/devicesReducer";

interface IMainBanner {
  children: deviceType;
  reverse: boolean;
}

export const MainBanner: React.FC<IMainBanner> = (props) => {
  return (
    <style.mainBanner reverse={props.reverse}>
      <style.bannerTextBlock>
        <style.h2>{props.children.Name}</style.h2>
        <>
          {props.children.Features.map((t) => (
            <div key={uuidv4()}>{t}</div>
          ))}
        </>
        <style.buttons>
          <OpenDeviceFullInfoCard
            id={props.children.DeviceID}
            type={props.children.Type}
          />
        </style.buttons>
      </style.bannerTextBlock>
      <style.bannerImgBlock imgUrl={props.children.UniqueDeviceUsingPhotoLink}>
        <style.img
          src={props.children.UniqueDeviceImageLink}
          alt={props.children.Name}
          reverse={props.reverse}
          smartphones={props.children.Type === "smartphones"}
        />
      </style.bannerImgBlock>
    </style.mainBanner>
  );
};
