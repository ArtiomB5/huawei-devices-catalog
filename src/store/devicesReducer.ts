import { Dispatch } from "redux";
import { GetCatalog } from "../catalogFakeApi";
import { CatalogLoaded } from "./visibilityReducer";

export type deviceType = {
  Type: "smartphones" | "tablets" | "laptops";
  ImageLinks: string[];
  Name: string;
  Price: number;
  DeviceID: string;
  Features: string[];
  UniqueDeviceUsingPhotoLink: string;
  UniqueDeviceImageLink: string;
};

export type devicesStateType = {
  smartphones: deviceType[];
  tablets: deviceType[];
  laptops: deviceType[];
};

type actionType = ResponseStateAC;

let initialState: devicesStateType = {
  smartphones: [] as deviceType[],
  tablets: [] as deviceType[],
  laptops: [] as deviceType[]
};

export const devicesReducer = (
  state: devicesStateType = initialState,
  action: actionType
): devicesStateType => {
  switch (action.type) {
    case "SET_STATE":
      return {
        smartphones: [...action.payload.smartphones],
        tablets: [...action.payload.tablets],
        laptops: [...action.payload.laptops]
      };

    default:
      return state;
  }
};

type ResponseStateAC = {
  type: "SET_STATE";
  payload: devicesStateType;
};

export let SetStateAC = (payload: devicesStateType): ResponseStateAC => {
  return { type: "SET_STATE", payload: payload };
};

export let SetStateTC = () => {
  return (dispatch: Dispatch) => {
    GetCatalog().then((response) => {
      dispatch(SetStateAC(response));
      dispatch(CatalogLoaded(false));
    });
  };
};

// response as stateType
