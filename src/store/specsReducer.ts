import { Dispatch } from "redux";
import { GetSmartphonesSpecs } from "../catalogFakeApi";

export type smarthoneSpecsType = {
  DeviceID: string;
  Dimencions: {
    Height: string;
    Width: string;
    Depth: string;
    Weight: string;
  };
  Display: {
    Size: string;
    Type: string;
    Colour: string;
    Resolution: string;
  };
  Processor: {
    Name: string;
    Cpu: string;
    Gpu: string;
    Npu: string;
  };
  Os: string;
  Memory: {
    RamRom: string;
  };
  RearCamera: {
    Info: string[];
    AutofocusMode: string;
    ZoomMode: string;
    ImageResolution: string;
    VideoResolution: string;
    RearFlashlight: string;
    RearCameraCaptureMode: string;
  };
  FrontCamera: {
    Info: string[];
    ImageResolution: string;
    VideoResolution: string;
    FrontCameraCaptureMode: string;
  };
  Battery: string;
  Charging: string[];
  Resistant: string;
  Network: {
    "Primary SIM Card": string[];
    "Secondary SIM Card": string[];
  };
};

export type tabletSpecsType = {
  DeviceID: string;
  DimensionsAndWeight: {
    Height: string;
    Width: string;
    Depth: string;
    Weight: string;
  };
  Display: {
    Size: string;
    Resolution: string;
    Type: string;
    ScreenToBodyRatio: string;
    Colour: string;
    ContrastRatio: string;
  };
  Processor: {
    Name: string;
    Cpu: string;
    Gpu: string;
    Npu: string;
  };
  Os: string;
  Memory: {
    Rom: string;
    ExtendedStorage: string;
  };
  Battery: string;
  Charging: string;
  RearCamera: {
    Info: string;
    ImageResolution: string;
    VideoResolution: string;
    RearFlashlight: string;
    RearCameraCaptureMode: string;
  };
  FrontCamera: {
    Info: string;
    ImageResolution: string;
    VideoResolution: string;
    FrontCameraCaptureMode: string;
  };
  Connectivity: {
    Wlan: string;
    Bluetooth: string;
    BluetoothFileTransfer: string;
    PCDataSynchronization: string;
    Otg: string;
    Usb: string;
    WirelessScreenProjection: string;
  };
  Location: string;
  Sensor: string;
  Microphones: string;
  Speakers: string;
  Audio: string[];
  Video: string;
  IntheBox: string[];
};

export type laptopSpecsType = {
  DeviceID: string;
  Os: string;
  Dimensions: {
    Width: string;
    Depth: string;
    Height: string;
  };
  Weight: string;
  Display: {
    Size: string;
    Type: string;
    ScreenToBodyRatio: string;
    Resolution: string;
    Colour: string;
    ContrastRatio: string;
    MaximumBrightness: string;
    LightSensor: string;
    ViewingAngle: string;
    AspectRatio: string;
    Info: string;
  };
  Processor: string;
  Memory: string;
  Battery: {
    Material: string;
    Capacity: string;
    Info: string;
  };
  Wireless: {
    WiFi: string;
    Bluetooth: string;
  };
  Camera: string;
  CameraInfo: string;
  Apps: string;
  Ports: string;
  Material: string;
  Storage: string;
  KeyboardAndTouchpad: string[];
  Graphics: string;
  Audio: string;
  InTheBox: string[];
};

export type specsStateType = {
  smartphones: smarthoneSpecsType[];
  tablets: tabletSpecsType[];
  laptops: laptopSpecsType[];
};

let initialState = {
  smartphones: [],
  tablets: [],
  laptops: []
};

export let specsReducer = (
  state: specsStateType = initialState,
  action: actionType
): specsStateType => {
  switch (action.type) {
    case "SET_SPECS":
      return action.payload;
    default:
      return state;
  }
};

export let SetSpecsAC = (payload: {
  smartphones: smarthoneSpecsType[];
  tablets: tabletSpecsType[];
  laptops: laptopSpecsType[];
}) => {
  return {
    type: "SET_SPECS",
    payload: payload
  };
};
export let SetSpecsTC = () => {
  return (dispatch: Dispatch) => {
    GetSmartphonesSpecs().then((response: any) => {
      dispatch(SetSpecsAC(response));
    });
  };
};

export type actionType = ReturnType<typeof SetSpecsAC>;
