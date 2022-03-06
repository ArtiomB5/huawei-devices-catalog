export type ordersStateType = {
  showMenu: boolean;
};

let initialState: ordersStateType = {
  showMenu: true,
};

export const setMenuVisibilityReducer = (
  state: ordersStateType = initialState,
  action: actionType
): ordersStateType => {
  switch (action.type) {
    case "SET_MENU_VISIBILITY":
      return { showMenu: action.payload };
    default:
      return state;
  }
};

export const setMenuVisibilityAC = (payload: boolean) => {
  return {
    type: "SET_MENU_VISIBILITY",
    payload: payload,
  } as const;
};

type actionType =
  | ReturnType<typeof setMenuVisibilityAC>
