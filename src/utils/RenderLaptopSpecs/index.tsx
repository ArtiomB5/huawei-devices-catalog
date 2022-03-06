import { useSelector } from "react-redux";
import { rootReducerType } from "../../store";
import * as style from "./style";

type propsType = {
  id: string;
};

export const RenderLaptopSpecs = (props: propsType) => {
  let state = useSelector((state: rootReducerType) => state.specs.laptops);
  let specs = state.filter((s) => s.DeviceID === props.id)[0];

  return (
    <style.wrapper>
      <style.cell height={100}>
        <div>Os: {specs.Os}</div>
      </style.cell>
      <style.cell height={100}>
        <style.subTitle>Dimensions</style.subTitle>
        <div>Width: {specs.Dimensions.Width}</div>
        <div>Depth: {specs.Dimensions.Depth}</div>
        <div>Height: {specs.Dimensions.Height}</div>
        <div>Weight: {specs.Weight}</div>
      </style.cell>
      <style.cell height={300}>
        <style.subTitle>Display</style.subTitle>
        <div>Size: {specs.Display.Size}</div>
        <div>Type: {specs.Display.Type}</div>
        <div>Screen To Body Ratio: {specs.Display.ScreenToBodyRatio}</div>
        <div>Resolution: {specs.Display.Resolution}</div>
        <div>Colour: {specs.Display.Colour}</div>
        <div>Contrast Ratio: {specs.Display.ContrastRatio}</div>
        <div>Maximum Brightness: {specs.Display.MaximumBrightness}</div>
        <div>Light Sensor: {specs.Display.LightSensor}</div>
        <div>Viewing Angle: {specs.Display.ViewingAngle}</div>
        <div>Aspect Ratio: {specs.Display.AspectRatio}</div>
        <div>Info: {specs.Display.Info}</div>
        <div>Processor: {specs.Processor}</div>
        <div>Memory: {specs.Memory}</div>
      </style.cell>
      <style.cell height={150}>
        <style.subTitle>Battery</style.subTitle>
        <div>Material: {specs.Battery.Material}</div>
        <div>Capacity: {specs.Battery.Capacity}</div>
        <div>{specs.Battery.Info}</div>
      </style.cell>
      <style.cell height={450}>
        <style.subTitle>Wireless</style.subTitle>
        <div>WiFi: {specs.Wireless.WiFi}</div>
        <div>Bluetooth: {specs.Wireless.Bluetooth}</div>
        <div>Camera: {specs.Camera}</div>
        <div>Camera Info: {specs.CameraInfo}</div>
        <div>Apps: {specs.Apps}</div>
        <div>Ports: {specs.Ports}</div>
        <div>Material: {specs.Material}</div>
        <div>Storage: {specs.Storage}</div>
        <div>Keyboard And Touchpad: {specs.KeyboardAndTouchpad}</div>
        <div>Graphics: {specs.Graphics}</div>
        <div>Audio: {specs.Audio}</div>
        <div>InTheBox: {specs.InTheBox}</div>
      </style.cell>
    </style.wrapper>
  );
};
