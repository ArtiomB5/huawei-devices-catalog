import { useDispatch } from "react-redux";
import { SetDevice } from "../../store/deviceFullInfoCardReducer";
import { Show } from "../../store/visibilityReducer";
import { Button } from "../../UI/Button";

type propsType = {
  id: string;
  type: "smartphones" | "tablets" | "laptops";
};

export const OpenDeviceFullInfoCard = (props: propsType) => {
  let dispatch = useDispatch();

  let clickHandler = () => {
    dispatch(SetDevice(props.id, props.type));
    dispatch(Show("SHOW_DEVICE_FULL_INFO_CARD"));
  };

  return <Button buttonFunc={clickHandler}>Learn More</Button>;
};
