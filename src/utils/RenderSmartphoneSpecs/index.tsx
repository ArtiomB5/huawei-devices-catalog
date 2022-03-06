import { useSelector } from "react-redux";
import { rootReducerType } from "../../store";
import * as style from "./style";

type propsType = {
  id: string;
};

export const RenderSmartphoneSpecs = (props: propsType) => {
  let state = useSelector((state: rootReducerType) => state.specs.smartphones);
  let specs = state.filter((s) => s.DeviceID === props.id)[0];
  return (
    <style.wrapper>
      <style.cell height={120}>
        <style.subTitle>Dimensions</style.subTitle>
        <div>Height: {specs.Dimencions.Height}</div>
        <div>Width: {specs.Dimencions.Width}</div>
        <div>Depth: {specs.Dimencions.Depth}</div>
        <div>Weight: {specs.Dimencions.Weight}</div>
      </style.cell>
      <style.cell height={120}>
        <style.subTitle>Display</style.subTitle>
        <div>Size: {specs.Display.Size}</div>
        <div>Type: {specs.Display.Type}</div>
        <div>Colour: {specs.Display.Colour}</div>
        <div>Resolution: {specs.Display.Resolution}</div>
      </style.cell>
      <style.cell height={120}>
        <style.subTitle>Processor</style.subTitle>
        <div>Name: {specs.Processor.Name}</div>
        <div>Cpu: {specs.Processor.Cpu}</div>
        <div>Gpu: {specs.Processor.Gpu}</div>
        <div>Npu: {specs.Processor.Npu}</div>
      </style.cell>
      <style.cell height={50}>
        <div>Os: {specs.Os}</div>
      </style.cell>
      <style.cell height={50}>
        <style.subTitle>Memory</style.subTitle>
        <div>Ram + Rom: {specs.Memory.RamRom}</div>
      </style.cell>
      <style.cell height={300}>
        <style.subTitle>Rear Camera:</style.subTitle>
        <div>{specs.RearCamera.Info}</div>
        <div>Auto focusMode: {specs.RearCamera.AutofocusMode}</div>
        <div>Zoom Mode: {specs.RearCamera.ZoomMode}</div>
        <div>Image Resolution: {specs.RearCamera.ImageResolution}</div>
        <div>Video Resolution: {specs.RearCamera.VideoResolution}</div>
        <div>Rear Flashlight: {specs.RearCamera.RearFlashlight}</div>
        <div>
          Rear Camera Capture Mode: {specs.RearCamera.RearCameraCaptureMode}
        </div>
      </style.cell>
      <style.cell height={180}>
        <style.subTitle>Front Camera</style.subTitle>
        <div>{specs.FrontCamera.Info}</div>
        <div>Image Resolution: {specs.FrontCamera.ImageResolution}</div>
        <div>Video Resolution: {specs.FrontCamera.VideoResolution}</div>
        <div>
          Front Camera Capture Mode: {specs.FrontCamera.FrontCameraCaptureMode}
        </div>
      </style.cell>
      <style.cell height={100}>
        <style.subTitle>Battery</style.subTitle>
        <div>Charging: {specs.Charging}</div>
        <div>Resistant: {specs.Resistant}</div>
      </style.cell>
      <style.cell height={100}>
        <style.subTitle>Network</style.subTitle>
        <div>Primary SIM Card:</div>
        <div>{specs.Network["Primary SIM Card"][0]}</div>
        <div>Secondary SIM Card:</div>
        <div>{specs.Network["Secondary SIM Card"][0]}</div>
      </style.cell>
    </style.wrapper>
  );
};
