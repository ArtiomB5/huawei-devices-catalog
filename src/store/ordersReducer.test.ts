import * as all from "./ordersReducer";
import * as data from "../catalogFakeApi/catalog";

let initialState: all.ordersStateType = {
  ordersLoading: true,
  orders: [] as all.orderType[]
};

beforeAll(() => {});
let payload = [
  {
    orderId: "orderId1",
    orderDevices: [data.CATALOG.smartphones[0], data.CATALOG.smartphones[1]],
    orderTotalPrice: 1,
    orderDate: "2011-10-05T14:48:00.000Z",
    status: "completed"
  }
];
// test("should return action.", () => {
//   expect(all.getOrdersAC()).toEqual({
//     ordersLoading: true,
//     orders: [
//       {
//         orderId: "orderId1",
//         orderDevices: [
//           data.CATALOG.smartphones[0],
//           data.CATALOG.smartphones[1]
//         ],
//         orderTotalPrice: 1,
//         orderDate: "2011-10-05T14:48:00.000Z",
//         status: "completed"
//       }
//     ]
//   });
// });
