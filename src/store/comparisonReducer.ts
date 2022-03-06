export type comparisonStateType = {
  smartphone1: { name: string; id: string };
  smartphone2: { name: string; id: string };
  tablet1: { name: string; id: string };
  tablet2: { name: string; id: string };
  laptop1: { name: string; id: string };
  laptop2: { name: string; id: string };
};

let initialState: comparisonStateType = {
  smartphone1: { name: "", id: "" },
  smartphone2: { name: "", id: "" },
  tablet1: { name: "", id: "" },
  tablet2: { name: "", id: "" },
  laptop1: { name: "", id: "" },
  laptop2: { name: "", id: "" }
};

export let comparisonReducer = (
  state: comparisonStateType = initialState,
  action: actionType
): comparisonStateType => {
  switch (action.type) {
    case "ADD_SMARTPHONE":
      if (state.smartphone1.name === "") {
        return {
          ...state,
          smartphone1: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else if (state.smartphone1.name === action.payload.name) {
        return state;
      } else if (state.smartphone2.name === "") {
        return {
          ...state,
          smartphone2: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else {
        return state;
      }
    case "ADD_TABLET":
      if (state.tablet1.name === "") {
        return {
          ...state,
          tablet1: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else if (state.tablet2.name === "") {
        return {
          ...state,
          tablet2: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else {
        return state;
      }
    case "ADD_LAPTOP":
      if (state.laptop1.name === "") {
        return {
          ...state,
          laptop1: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else if (state.laptop2.name === "") {
        return {
          ...state,
          laptop2: {
            name: action.payload.name,
            id: action.payload.id
          }
        };
      } else {
        return state;
      }
    case "REMOVE_DEVICE":
      if (action.payload.type === "smartphone") {
        return {
          ...state,
          smartphone1: { name: "", id: "" },
          smartphone2: { name: "", id: "" }
        };
      }
      if (action.payload.type === "tablet") {
        return {
          ...state,
          tablet1: { name: "", id: "" },
          tablet2: { name: "", id: "" }
        };
      }
      if (action.payload.type === "laptop") {
        return {
          ...state,
          laptop1: { name: "", id: "" },
          laptop2: { name: "", id: "" }
        };
      }
      return state;
    default:
      return state;
  }
};

export let AddSmartphone = (payload: { name: string; id: string }) => {
  return {
    type: "ADD_SMARTPHONE",
    payload: { name: payload.name, id: payload.id }
  } as const;
};
export let AddTablet = (payload: { name: string; id: string }) => {
  return {
    type: "ADD_TABLET",
    payload: { name: payload.name, id: payload.id }
  } as const;
};
export let AddLaptop = (payload: { name: string; id: string }) => {
  return {
    type: "ADD_LAPTOP",
    payload: { name: payload.name, id: payload.id }
  } as const;
};
export let RemoveDevice = (payload: {
  type: "smartphone" | "tablet" | "laptop";
}) => {
  return {
    type: "REMOVE_DEVICE",
    payload: { type: payload.type }
  } as const;
};

type actionType =
  | ReturnType<typeof AddSmartphone>
  | ReturnType<typeof AddTablet>
  | ReturnType<typeof AddLaptop>
  | ReturnType<typeof RemoveDevice>;
