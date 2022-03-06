import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  AddSmartphone,
  AddTablet,
  AddLaptop
} from "../../store/comparisonReducer";
import { rootReducerType } from "../../store";

type propsType = {
  id: string;
  name: string;
  type: string;
};

export const AddDeviceToComparison = (props: propsType) => {
  let { laptop1, laptop2, smartphone1, smartphone2, tablet1, tablet2 } =
  useSelector((state: rootReducerType) => state.comparison);
  
  let dispatch = useDispatch();

  let clickHandler = () => {
    switch (props.type) {
      case "smartphones":
        dispatch(AddSmartphone({ name: props.name, id: props.id }));
        break;
      case "tablets":
        dispatch(AddTablet({ name: props.name, id: props.id }));
        break;
      case "laptops":
        dispatch(AddLaptop({ name: props.name, id: props.id }));
    }
  };

  const checkComparison = () => {
    if (
      laptop1.id !== props.id &&
      laptop2.id !== props.id &&
      smartphone1.id !== props.id &&
      smartphone2.id !== props.id &&
      tablet1.id !== props.id &&
      tablet2.id !== props.id
    ) {
      return true;
    } else {
      return false;
    }
  };

  return(
    checkComparison() ? 
    <Button buttonFunc={clickHandler} comparison={true}>Add to comparison</Button> : 
    <div style={{height: '40px', margin: '10px'}}></div>
  )
};
