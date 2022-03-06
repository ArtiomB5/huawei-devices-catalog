import { useSelector } from "react-redux";
import { rootReducerType } from "../../store";
import * as style from "./style";

type propsType = {
  id: string;
  type: "card" | "name";
};

export const AccountDeviceCard = (props: propsType) => {
  let devices = useSelector((state: rootReducerType) => state.devices);
  let searchResultSmartphones = devices.smartphones.filter(
    (s) => s.DeviceID === props.id
  );
  if (searchResultSmartphones.length > 0) {
    if (props.type === "card") {
      return (
        <style.Card>
          <style.img
            src={searchResultSmartphones[0].ImageLinks[0]}
            alt={searchResultSmartphones[0].Name}
          />
          <h4>{searchResultSmartphones[0].Name}</h4>
        </style.Card>
      );
    } else if (props.type === "name") {
      return <style.Card>{searchResultSmartphones[0].Name}</style.Card>;
    }
  } else {
    return <div></div>
  }

  let searchResultTablets = devices.tablets.filter(
    (s) => s.DeviceID === props.id
  );
  if (searchResultTablets.length > 0) {
    if (props.type === "card") {
      return (
        <style.Card>
          <style.img
            src={searchResultTablets[0].ImageLinks[0]}
            alt={searchResultTablets[0].Name}
          />
          <h4>{searchResultTablets[0].Name}</h4>
        </style.Card>
      );
    } else if (props.type === "name") {
      return <style.Card>{searchResultTablets[0].Name}</style.Card>;
    }
  } else {
    return <div></div>
  }

  let searchResultLaptops = devices.laptops.filter(
    (s) => s.DeviceID === props.id
  );
  if (searchResultLaptops.length > 0) {
    if (props.type === "card") {
      return (
        <style.Card>
          <style.img
            src={searchResultLaptops[0].ImageLinks[0]}
            alt={searchResultLaptops[0].Name}
          />
          <h4>{searchResultLaptops[0].Name}</h4>
        </style.Card>
      );
    } else if (props.type === "name") {
      return <style.Card>{searchResultLaptops[0].Name}</style.Card>;
    }
  } else {
    return <div></div>
  }
};
