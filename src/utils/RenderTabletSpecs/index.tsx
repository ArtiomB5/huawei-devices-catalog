import { useSelector } from "react-redux";
import { rootReducerType } from "../../store";
import * as style from "./style";

type propsType = {
  id: string;
};

export const RenderTabletSpecs = (props: propsType) => {
  let state = useSelector((state: rootReducerType) => state.specs.tablets);
  let specs = state.filter((s) => s.DeviceID === props.id)[0];

  return (
    <style.wrapper>
      <style.cell height={150}>
        <style.subTitle>Dimensions And Weight</style.subTitle>
        <div>Height: {specs.DimensionsAndWeight.Height}</div>
        <div>Width: {specs.DimensionsAndWeight.Width}</div>
        <div>Depth: {specs.DimensionsAndWeight.Depth}</div>
        <div>Weight: {specs.DimensionsAndWeight.Weight}</div>
      </style.cell>
      <style.cell height={150}>
        <style.subTitle>Display</style.subTitle>
        <div>Size: {specs.Display.Size}</div>
        <div>Resolution: {specs.Display.Resolution}</div>
        <div>Type: {specs.Display.Type}</div>
        <div>Screen To Body Ratio: {specs.Display.ScreenToBodyRatio}</div>
        <div>Colour: {specs.Display.Colour}</div>
        <div>Contrast Ratio: {specs.Display.ContrastRatio}</div>
      </style.cell>
      <style.cell height={200}>
        <style.subTitle>Processor</style.subTitle>
        <div>{specs.Processor.Name}</div>
        <div>Cpu: {specs.Processor.Cpu}</div>
        <div>Gpu: {specs.Processor.Gpu}</div>
        <div>Npu: {specs.Processor.Npu}</div>
        <div>Os: {specs.Os}</div>
      </style.cell>
      <style.cell height={150}>
        <style.subTitle>Memory</style.subTitle>
        <div>Rom: {specs.Memory.Rom}</div>
        <div>Extended Storage: {specs.Memory.ExtendedStorage}</div>
        <div>Battery: {specs.Battery}</div>
        <div>Charging: {specs.Charging}</div>
      </style.cell>
      <style.cell height={300}>
        <style.subTitle>Rear Camera</style.subTitle>
        <div>{specs.RearCamera.Info}</div>
        <div>Image Resolution: {specs.RearCamera.ImageResolution}</div>
        <div>Video Resolution: {specs.RearCamera.VideoResolution}</div>
        <div>Rear Flashlight: {specs.RearCamera.RearFlashlight}</div>
        <div>
          Rear Camera Capture Mode: {specs.RearCamera.RearCameraCaptureMode}
        </div>
      </style.cell>
      <style.cell height={200}>
        <style.subTitle>Front Camera</style.subTitle>
        <div>{specs.FrontCamera.Info}</div>
        <div>Image Resolution: {specs.FrontCamera.ImageResolution}</div>
        <div>Video Resolution: {specs.FrontCamera.VideoResolution}</div>
        <div>
          Front Camera Capture Mode: {specs.FrontCamera.FrontCameraCaptureMode}
        </div>
      </style.cell>
      <style.cell height={500}>
        <style.subTitle>Connectivity</style.subTitle>
        <div>Wlan: {specs.Connectivity.Wlan}</div>
        <div>Bluetooth: {specs.Connectivity.Bluetooth}</div>
        <div>
          Bluetooth File Transfer: {specs.Connectivity.BluetoothFileTransfer}
        </div>
        <div>
          PC Data Synchronization: {specs.Connectivity.PCDataSynchronization}
        </div>
        <div>Otg: {specs.Connectivity.Otg}</div>
        <div>Usb: {specs.Connectivity.Usb}</div>
        <div>
          Wireless Screen Projection:
          {specs.Connectivity.WirelessScreenProjection}
        </div>
        <div>Location: {specs.Location}</div>
        <div>Sensor: {specs.Sensor}</div>
        <div>Microphones: {specs.Microphones}</div>
        <div>Speakers: {specs.Speakers}</div>
        <div>Audio: {specs.Audio}</div>
        <div>Video: {specs.Video}</div>
        <div>In The Box: {specs.IntheBox}</div>
      </style.cell>
    </style.wrapper>
  );
};
