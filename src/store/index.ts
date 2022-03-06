import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { devicesReducer } from "./devicesReducer";
import { visibilityReducer } from "./visibilityReducer";
import { specsReducer } from "./specsReducer";
import { comparisonReducer } from "./comparisonReducer";
import { deviceFullInfoCardReducer } from "./deviceFullInfoCardReducer";
import { searchReducer } from "./searchReducer";
import { ordersReducer } from "./ordersReducer";
import { setMenuVisibilityReducer } from "./menuButtonRedcuer";

let rootReducer = combineReducers({
  devices: devicesReducer,
  visibility: visibilityReducer,
  specs: specsReducer,
  comparison: comparisonReducer,
  deviceFullInfoCard: deviceFullInfoCardReducer,
  search: searchReducer,
  orders: ordersReducer,
  menuVisibility: setMenuVisibilityReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
