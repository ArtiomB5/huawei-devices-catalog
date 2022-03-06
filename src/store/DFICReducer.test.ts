import * as all from "./deviceFullInfoCardReducer";
import * as data from "../catalogFakeApi/catalog";

let initialState: all.DFICStateType = {
  deviceId: "",
  type: "laptops"
};

beforeEach(() => {});

//SetDevice test
// test("should create action", () => {
//   let id = data.CATALOG.smartphones[0].DeviceID;
//   let type = data.CATALOG.smartphones[0].Type;
//   expect(all.SetDevice(id, type)).toEqual({
//     type: "SET_DEVICE",
//     payload: {
//       deviceId: "e7d0f405-1e5a-4f36-8460-414ddeaa35b5",
//       type: "smartphones"
//     }
//   });
// });
//SetDevice test

//deviceFullInfoCardReducer test
// test("should sey device id and device type for selected device", () => {
//   let id = data.CATALOG.smartphones[0].DeviceID;
//   let type = data.CATALOG.smartphones[0].Type;
//   let action = all.SetDevice(id, type);
//   expect(all.deviceFullInfoCardReducer(initialState, action)).toEqual({
//     deviceId: "e7d0f405-1e5a-4f36-8460-414ddeaa35b5",
//     type: "smartphones"
//   });
// });
//deviceFullInfoCardReducer test
