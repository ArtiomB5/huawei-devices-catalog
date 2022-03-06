import * as all from "./searchReducer";
import * as data from "../catalogFakeApi/catalog";

let initialState = {
  smartphones: [],
  tablets: [],
  laptops: []
};

beforeAll(() => {});

//SetIds test
test("shoul return action", () => {
  let payload = {
    smartphones: [data.CATALOG.smartphones[0].DeviceID],
    tablets: [
      data.CATALOG.tablets[0].DeviceID,
      data.CATALOG.tablets[1].DeviceID
    ],
    laptops: [data.CATALOG.laptops[0].DeviceID]
  };
  expect(all.SetIds(payload)).toEqual({
    type: "SET_IDS",
    payload: {
      smartphones: [data.CATALOG.smartphones[0].DeviceID],
      tablets: [
        data.CATALOG.tablets[0].DeviceID,
        data.CATALOG.tablets[1].DeviceID
      ],
      laptops: [data.CATALOG.laptops[0].DeviceID]
    }
  });
});
//SetIds test

//searchReducer test
test("should return new state", () => {
  let payload = {
    smartphones: [data.CATALOG.smartphones[0].DeviceID],
    tablets: [
      data.CATALOG.tablets[0].DeviceID,
      data.CATALOG.tablets[1].DeviceID
    ],
    laptops: [data.CATALOG.laptops[0].DeviceID]
  };
  let action = all.SetIds(payload);
  expect(all.searchReducer(initialState, action)).toEqual({
    smartphones: [data.CATALOG.smartphones[0].DeviceID],
    tablets: [
      data.CATALOG.tablets[0].DeviceID,
      data.CATALOG.tablets[1].DeviceID
    ],
    laptops: [data.CATALOG.laptops[0].DeviceID]
  });
});
//searchReducer test
