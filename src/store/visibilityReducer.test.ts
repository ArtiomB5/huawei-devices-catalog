import * as all from "./visibilityReducer";
import * as data from "../catalogFakeApi";

let initialState = {} as all.visibilityStateType;

beforeAll(() => {
  initialState = {
    mainContent: true,
    smartphones: false,
    tablets: false,
    laptops: false,
    cart: false,
    comparison: false,
    deviceFullInfoCard: false,
    serch: false,
    loading: true,
    login: false,
    gallery: false
  };
});

//SetVisibility test
test("should return action", () => {
  expect(all.SetVisibility("mainContent")).toEqual({
    type: "SHOW_DEVICES",
    payload: "mainContent"
  });
});
test("should return SHOW_DEVICES action for smartphones", () => {
  expect(all.SetVisibility("smartphones")).toEqual({
    type: "SHOW_DEVICES",
    payload: "smartphones"
  });
});
test("should return SHOW_DEVICES action for tablets", () => {
  expect(all.SetVisibility("tablets")).toEqual({
    type: "SHOW_DEVICES",
    payload: "tablets"
  });
});
test("should return SHOW_DEVICES action for laptops", () => {
  expect(all.SetVisibility("laptops")).toEqual({
    type: "SHOW_DEVICES",
    payload: "laptops"
  });
});
//SetVisibility test

//CatalogLoaded test
test("should return LOADED action", () => {
  expect(all.CatalogLoaded(true)).toEqual({
    type: "LOADED",
    payload: true
  });
});
//CatalogLoaded test

//Show test
test("should return SHOW_CART action", () => {
  expect(all.Show("SHOW_CART")).toEqual({
    type: "SHOW_CART",
    payload: true
  });
});
test("should return SHOW_COMPARISON action", () => {
  expect(all.Show("SHOW_COMPARISON")).toEqual({
    type: "SHOW_COMPARISON",
    payload: true
  });
});
test("should return SHOW_DEVICE_FULL_INFO_CARD action", () => {
  expect(all.Show("SHOW_DEVICE_FULL_INFO_CARD")).toEqual({
    type: "SHOW_DEVICE_FULL_INFO_CARD",
    payload: true
  });
});
test("should return SHOW_SEARCH action", () => {
  expect(all.Show("SHOW_SEARCH")).toEqual({
    type: "SHOW_SEARCH",
    payload: true
  });
});
test("should return SHOW_LOGIN action", () => {
  expect(all.Show("SHOW_LOGIN")).toEqual({
    type: "SHOW_LOGIN",
    payload: true
  });
});
test("should return SHOW_IMGS_GALLERY action", () => {
  expect(all.Show("SHOW_IMGS_GALLERY")).toEqual({
    type: "SHOW_IMGS_GALLERY",
    payload: true
  });
});
//Show test

//visibilityReducer test
test("should return new state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.SetVisibility("mainContent");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    ...initialState,
    mainContent: true
  });
});
test("should return new smartphones state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.SetVisibility("smartphones");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: true,
    tablets: false,
    laptops: false,
    cart: false,
    comparison: false,
    deviceFullInfoCard: false,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new tablets state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.SetVisibility("tablets");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: true,
    laptops: false,
    cart: false,
    comparison: false,
    deviceFullInfoCard: false,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new laptops state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.SetVisibility("laptops");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: false,
    laptops: true,
    cart: false,
    comparison: false,
    deviceFullInfoCard: false,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new loading state", () => {
  let action = all.CatalogLoaded(false);
  expect(all.visibilityReducer(initialState, action)).toEqual({
    ...initialState,
    loading: false
  });
});
test("should return new cart visibility state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.Show("SHOW_CART");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: false,
    laptops: false,
    cart: true,
    comparison: false,
    deviceFullInfoCard: false,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new comparison visibility state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.Show("SHOW_COMPARISON");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: false,
    laptops: false,
    cart: false,
    comparison: true,
    deviceFullInfoCard: false,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new deviceFullInfoCard visibility state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.Show("SHOW_DEVICE_FULL_INFO_CARD");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: false,
    laptops: false,
    cart: false,
    comparison: false,
    deviceFullInfoCard: true,
    serch: false,
    loading: false,
    login: false,
    gallery: false
  });
});
test("should return new serch visibility state", () => {
  initialState = {
    ...initialState,
    loading: false
  };
  let action = all.Show("SHOW_SEARCH");
  expect(all.visibilityReducer(initialState, action)).toEqual({
    mainContent: false,
    smartphones: false,
    tablets: false,
    laptops: false,
    cart: false,
    comparison: false,
    deviceFullInfoCard: false,
    serch: true,
    loading: false,
    login: false,
    gallery: false
  });
});
//visibilityReducer test
