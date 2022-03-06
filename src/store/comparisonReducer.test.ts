import * as all from "./comparisonReducer";
import * as catalog from "../catalogFakeApi/catalog";

let initialState = {} as all.comparisonStateType;

beforeEach(() => {
  initialState = {
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  };
});

//AddSmartphone test
test("should return action for smartphone adding", () => {
  let name = catalog.CATALOG.smartphones[0].Name;
  let id = catalog.CATALOG.smartphones[0].DeviceID;

  expect(all.AddSmartphone({ name: name, id: id })).toEqual({
    type: "ADD_SMARTPHONE",
    payload: { name: name, id: id }
  });
});
//AddSmartphone test

//AddTablet test
test("should return action for tablet adding", () => {
  let name = catalog.CATALOG.tablets[0].Name;
  let id = catalog.CATALOG.tablets[0].DeviceID;

  expect(all.AddTablet({ name: name, id: id })).toEqual({
    type: "ADD_TABLET",
    payload: { name: name, id: id }
  });
});
//AddTablet test

//AddLaptop test
test("should return action for laptop adding", () => {
  let name = catalog.CATALOG.laptops[0].Name;
  let id = catalog.CATALOG.laptops[0].DeviceID;

  expect(all.AddLaptop({ name: name, id: id })).toEqual({
    type: "ADD_LAPTOP",
    payload: { name: name, id: id }
  });
});
//AddLaptop test

//RemoveDevice test
test("should return action for device removing", () => {
  expect(all.RemoveDevice({ type: "smartphone" })).toEqual({
    type: "REMOVE_DEVICE",
    payload: { type: "smartphone" }
  });
  expect(all.RemoveDevice({ type: "tablet" })).toEqual({
    type: "REMOVE_DEVICE",
    payload: { type: "tablet" }
  });
  expect(all.RemoveDevice({ type: "laptop" })).toEqual({
    type: "REMOVE_DEVICE",
    payload: { type: "laptop" }
  });
});
//RemoveDevice test

//comparisonReducer test
test("should add first smartphone", () => {
  let name = catalog.CATALOG.smartphones[0].Name;
  let id = catalog.CATALOG.smartphones[0].DeviceID;
  let action = all.AddSmartphone({ name: name, id: id });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: name, id: id },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  });
});

test("should add second smartphone", () => {
  let name0 = catalog.CATALOG.smartphones[0].Name;
  let id0 = catalog.CATALOG.smartphones[0].DeviceID;
  let name1 = catalog.CATALOG.smartphones[1].Name;
  let id1 = catalog.CATALOG.smartphones[1].DeviceID;
  initialState = {
    smartphone1: { name: name0, id: id0 },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  };
  let action = all.AddSmartphone({ name: name1, id: id1 });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: name0, id: id0 },
    smartphone2: { name: name1, id: id1 },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  });
});

test("should add first tablet", () => {
  let name = catalog.CATALOG.tablets[0].Name;
  let id = catalog.CATALOG.tablets[0].DeviceID;
  let action = all.AddTablet({ name: name, id: id });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: name, id: id },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  });
});

test("should add second tablet", () => {
  let name0 = catalog.CATALOG.tablets[0].Name;
  let id0 = catalog.CATALOG.tablets[0].DeviceID;
  let name1 = catalog.CATALOG.tablets[1].Name;
  let id1 = catalog.CATALOG.tablets[1].DeviceID;
  initialState = {
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: name0, id: id0 },
    tablet2: { name: "", id: "" },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  };
  let action = all.AddTablet({ name: name1, id: id1 });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: name0, id: id0 },
    tablet2: { name: name1, id: id1 },
    laptop1: { name: "", id: "" },
    laptop2: { name: "", id: "" }
  });
});

test("should add first laptop", () => {
  let name = catalog.CATALOG.laptops[0].Name;
  let id = catalog.CATALOG.laptops[0].DeviceID;
  let action = all.AddLaptop({ name: name, id: id });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: name, id: id },
    laptop2: { name: "", id: "" }
  });
});

test("should add second laptop", () => {
  let name0 = catalog.CATALOG.tablets[0].Name;
  let id0 = catalog.CATALOG.tablets[0].DeviceID;
  let name1 = catalog.CATALOG.tablets[1].Name;
  let id1 = catalog.CATALOG.tablets[1].DeviceID;
  initialState = {
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: name0, id: id0 },
    laptop2: { name: "", id: "" }
  };
  let action = all.AddLaptop({ name: name1, id: id1 });
  expect(all.comparisonReducer(initialState, action)).toEqual({
    smartphone1: { name: "", id: "" },
    smartphone2: { name: "", id: "" },
    tablet1: { name: "", id: "" },
    tablet2: { name: "", id: "" },
    laptop1: { name: name0, id: id0 },
    laptop2: { name: name1, id: id1 }
  });
});
//comparisonReducer test
