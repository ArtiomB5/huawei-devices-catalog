export type visibilityStateType = {
  mainContent: boolean;
  smartphones: boolean;
  tablets: boolean;
  laptops: boolean;
  loading: boolean;
  cart: boolean;
  comparison: boolean;
  deviceFullInfoCard: boolean;
  serch: boolean;
  login: boolean;
  gallery: boolean;
};

let initialState: visibilityStateType = {
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

export let visibilityReducer = (
  state: visibilityStateType = initialState,
  action: actionType
): visibilityStateType => {
  switch (action.type) {
    case "SHOW_DEVICES":
      if (state.loading) {
        return state;
      } else {
        return {
          mainContent: "mainContent" === action.payload,
          smartphones: "smartphones" === action.payload,
          tablets: "tablets" === action.payload,
          laptops: "laptops" === action.payload,
          cart: false,
          comparison: false,
          deviceFullInfoCard: false,
          serch: false,
          loading: false,
          login: false,
          gallery: false
        };
      }
    case "SHOW_CART":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: action.payload,
        comparison: false,
        deviceFullInfoCard: false,
        serch: false,
        loading: false,
        login: false,
        gallery: false
      };
    case "SHOW_COMPARISON":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: false,
        comparison: action.payload,
        deviceFullInfoCard: false,
        serch: false,
        loading: false,
        login: false,
        gallery: false
      };
    case "SHOW_DEVICE_FULL_INFO_CARD":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: false,
        comparison: false,
        deviceFullInfoCard: action.payload,
        serch: false,
        loading: false,
        login: false,
        gallery: false
      };
    case "LOADED":
      return { ...state, loading: false };
    case "SHOW_SEARCH":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: false,
        comparison: false,
        deviceFullInfoCard: false,
        serch: action.payload,
        loading: false,
        login: false,
        gallery: false
      };
    case "SHOW_LOGIN":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: false,
        comparison: false,
        deviceFullInfoCard: false,
        serch: false,
        loading: false,
        login: action.payload,
        gallery: false
      };
    case "SHOW_IMGS_GALLERY":
      return {
        mainContent: false,
        smartphones: false,
        tablets: false,
        laptops: false,
        cart: false,
        comparison: false,
        deviceFullInfoCard: false,
        serch: false,
        loading: false,
        login: false,
        gallery: action.payload
      };
    default:
      return state;
  }
};

export const SetVisibility = (
  catalogPart: "mainContent" | "smartphones" | "tablets" | "laptops"
) => {
  return {
    type: "SHOW_DEVICES",
    payload: catalogPart
  } as const;
};
export const CatalogLoaded = (loadingStatus: boolean) => {
  return {
    type: "LOADED",
    payload: loadingStatus
  } as const;
};
export const Show = (
  type:
    | "SHOW_CART"
    | "SHOW_COMPARISON"
    | "SHOW_DEVICE_FULL_INFO_CARD"
    | "SHOW_SEARCH"
    | "SHOW_LOGIN"
    | "SHOW_IMGS_GALLERY"
) => {
  return {
    type: type,
    payload: true
  } as const;
};

type actionType =
  | ReturnType<typeof SetVisibility>
  | ReturnType<typeof CatalogLoaded>
  | ReturnType<typeof Show>;
