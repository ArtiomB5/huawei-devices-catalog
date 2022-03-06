import { devicesStateType } from "../../store/devicesReducer";

type propsType = {
  devices: devicesStateType;
  smartphoneForBanner: string;
  tabletForBanner: string;
  laptopForBanner: string;
};

export const GetBannerArray = (props: propsType) => {
  let smartphone = props.devices.smartphones.filter(
    (s) => s.Name === props.smartphoneForBanner
  );
  let tablet = props.devices.tablets.filter(
    (s) => s.Name === props.tabletForBanner
  );
  let laptop = props.devices.laptops.filter(
    (s) => s.Name === props.laptopForBanner
  );
  return [smartphone[0], tablet[0], laptop[0]];
};
