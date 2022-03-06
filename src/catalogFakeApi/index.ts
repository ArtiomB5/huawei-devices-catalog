import { useImperativeHandle } from "react";
import {
  CATALOG,
  SMARTPHONES_SPECS,
  TABLETS_SPECS,
  LAPTOPS_SPECS,
  USERS,
  ORDERS
} from "./catalog";

export const GetCatalog = (): Promise<any> => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATALOG);
    }, 2222);
  });
  return promise;
};

export const GetSmartphonesSpecs = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        smartphones: SMARTPHONES_SPECS,
        tablets: TABLETS_SPECS,
        laptops: LAPTOPS_SPECS
      });
    }, 1111);
  });
  return promise;
};

export const GetOrders = (userId: string) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ORDERS[userId as keyof typeof ORDERS]);
    }, 2143);
  });
  // useImperativeHandle;
  return promise;
};

export const Login = (login: string, password: string) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        USERS.filter((u) => {
          if (u.email === login) {
            return u;
          }
        }).length === 1
      ) {
        let user = USERS.find((u) => u.email === login);
        if (user?.password === password) {
          resolve({
            id: user.id,
            email: user.email,
            userName: user.login,
            firstName: user.firstName,
            lastName: user.lastName,
            photo: user.photo,
            ownsDevices: user.ownsDevices,
            status: "Success"
          });
        } else {
          resolve({
            id: "",
            email: "",
            userName: "",
            firstName: "",
            lastName: "",
            photo: "",
            ownsDevices: "",
            status: "Wrong password"
          });
        }
      } else {
        resolve({
          id: "",
          email: "",
          userName: "",
          firstName: "",
          lastName: "",
          photo: "",
          ownsDevices: "",
          status: "There is no user with this name or email"
        });
      }
    }, 1234);
  });

  return promise;
};
