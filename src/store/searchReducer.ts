export type searchStateType = {
  smartphones: string[];
  tablets: string[];
  laptops: string[];
};

let initialState = {
  smartphones: [],
  tablets: [],
  laptops: []
};

export let searchReducer = (
  state: searchStateType = initialState,
  action: actionType
): searchStateType => {
  switch (action.type) {
    case "SET_IDS":
      return action.payload;

    default:
      return state;
  }
};

export let SetIds = (payload: searchStateType) => {
  return {
    type: "SET_IDS",
    payload: payload
  };
};

type actionType = ReturnType<typeof SetIds>;
