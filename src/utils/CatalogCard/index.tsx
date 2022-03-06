import { v4 as uuidv4 } from "uuid";
import * as style from "./style";
import { useSelector } from "react-redux";
import { AddDeviceToComparison } from "../AddDeviceToComparison";
import { OpenDeviceFullInfoCard } from "../OpenDeviceFullInfoCard";
import { rootReducerType } from "../../store";
import { deviceType } from "../../store/devicesReducer";

interface ICatalogCard {
  children: deviceType;
}

export const CatalogCard: React.FC<ICatalogCard> = (props) => {
  let devicesInComparison = useSelector(
    (state: rootReducerType) => state.comparison
  );

  let comparisonCheck = (type: "smartphones" | "tablets" | "laptops") => {
    switch (type) {
      case "smartphones":
        if (
          devicesInComparison.smartphone1.id === props.children.DeviceID ||
          devicesInComparison.smartphone2.id === props.children.DeviceID
        ) {
          return "Device added to comparison";
        }
        break;
      case "tablets":
        if (
          devicesInComparison.tablet1.id === props.children.DeviceID ||
          devicesInComparison.tablet2.id === props.children.DeviceID
        ) {
          return "Device added to comparison";
        }
        break;
      case "laptops":
        if (
          devicesInComparison.laptop1.id === props.children.DeviceID ||
          devicesInComparison.laptop2.id === props.children.DeviceID
        ) {
          return "Device added to comparison";
        }
        break;
      default:
        break;
    }
  };
  return (
    <style.catalogCard>
      <style.nameAndImg>
        <h2>{props.children.Name}</h2>
        <style.img
          src={props.children.ImageLinks[0]}
          alt={props.children.Name}
        />
      </style.nameAndImg>
      <style.cardTextAndButtons>
        <style.features>
          {props.children.Features.map((t) => (
            <div key={uuidv4()}>{t}</div>
          ))}
        </style.features>
        <style.cardButtons>
          <OpenDeviceFullInfoCard
            id={props.children.DeviceID}
            type={props.children.Type}
          />
          <AddDeviceToComparison
            id={props.children.DeviceID}
            name={props.children.Name}
            type={props.children.Type}
          />
        </style.cardButtons>
        <style.cartAndComparisonInfo>
          <div>{comparisonCheck(props.children.Type)}</div>
        </style.cartAndComparisonInfo>
      </style.cardTextAndButtons>
    </style.catalogCard>
  );
};
