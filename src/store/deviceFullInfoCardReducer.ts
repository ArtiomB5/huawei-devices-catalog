export type DFICStateType = {
  deviceId: string;
  type: "smartphones" | "tablets" | "laptops";
};

let initialState: DFICStateType = {
  deviceId: "",
  type: "smartphones"
};

export const deviceFullInfoCardReducer = (
  state: DFICStateType = initialState,
  action: actionType
): DFICStateType => {
  switch (action.type) {
    case "SET_DEVICE":
      return {
        deviceId: action.payload.deviceId,
        type: action.payload.type
      };

    default:
      return state;
  }
};

export let SetDevice = (
  deviceId: string,
  type: "smartphones" | "tablets" | "laptops"
) => {
  return {
    type: "SET_DEVICE",
    payload: { deviceId: deviceId, type: type }
  } as const;
};

type actionType = ReturnType<typeof SetDevice>;
