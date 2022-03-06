import { Dispatch } from "redux";
import { GetOrders } from "../catalogFakeApi/index";

export type orderType = {
  orderId: string;
  orderDevices: any;
  orderTotalPrice: number;
  orderDate: string;
  status: "completed" | "uncompleted";
};

export type ordersStateType = {
  ordersLoading: boolean;
  orders: orderType[];
};

let initialState: ordersStateType = {
  ordersLoading: true,
  orders: [] as orderType[]
};

export const ordersReducer = (
  state: ordersStateType = initialState,
  action: actionType
): ordersStateType => {
  switch (action.type) {
    case "GET_ORDERS":
      return { ...state, orders: action.payload };
    case "ORDERS_LOADING":
      return { ...state, ordersLoading: action.payload };
    default:
      return state;
  }
};

export const getOrdersAC = (payload: orderType[]) => {
  return {
    type: "GET_ORDERS",
    payload: payload
  } as const;
};

export const ordersLoadingAC = (payload: boolean) => {
  return {
    type: "ORDERS_LOADING",
    payload: payload
  } as const;
};

export const getOrdersTC = (id: string) => {
  return (dispatch: Dispatch) => {
    GetOrders(id).then((response: any) => {
      dispatch(getOrdersAC(response));
    });
  };
};

type actionType =
  | ReturnType<typeof getOrdersAC>
  | ReturnType<typeof ordersLoadingAC>;
