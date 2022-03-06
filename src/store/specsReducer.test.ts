import {
  SetSpecsAC,
  specsReducer,
  specsStateType,
  actionType
} from "./specsReducer";
import {
  SMARTPHONES_SPECS,
  TABLETS_SPECS,
  LAPTOPS_SPECS
} from "../catalogFakeApi/catalog";

let initialState: specsStateType = {
  smartphones: [],
  tablets: [],
  laptops: []
};

beforeEach(() => {});

//SetSpecsAC test
test("should return action for devices specs adding", () => {
  expect(
    SetSpecsAC({
      smartphones: SMARTPHONES_SPECS,
      tablets: TABLETS_SPECS,
      laptops: LAPTOPS_SPECS
    })
  ).toEqual({
    type: "SET_SPECS",
    payload: {
      smartphones: SMARTPHONES_SPECS,
      tablets: TABLETS_SPECS,
      laptops: LAPTOPS_SPECS
    }
  });
});
//SetSpecsAC test

//specsReducer test
test("should set devices specs state", () => {
  let action = SetSpecsAC({
    smartphones: SMARTPHONES_SPECS,
    tablets: TABLETS_SPECS,
    laptops: LAPTOPS_SPECS
  }) as actionType;
  let resultState = specsReducer(initialState, action);
  expect(resultState).toEqual({
    smartphones: SMARTPHONES_SPECS,
    tablets: TABLETS_SPECS,
    laptops: LAPTOPS_SPECS
  });
});
//specsReducer test
