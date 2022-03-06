import { UserPhoto } from "../../UI/UserPhoto";
import * as style from "./style";

type propsType = {
  email: string;
  photo: string;
  name: string;
};

export const LoginButton = (props: propsType) => {
  return (
    <>
      {props.email === "" && "Login"}
      {props.email !== "" && (
        <>
          {props.photo === "" ? (
            <style.loginButton>
              <UserPhoto
                imgUrl={
                  "https://banner2.cleanpng.com/20180702/iiq/kisspng-computer-icons-user-royalty-free-5b3a0a2d6aceb1.8133361215305303494375.jpg"
                }
                diameterMM={"50"}
              />
              <div>{props.name}</div>
            </style.loginButton>
          ) : (
            <style.loginButton>
              <UserPhoto imgUrl={props.photo} diameterMM={"50px"} />
              <div>{props.name}</div>
            </style.loginButton>
          )}
        </>
      )}
    </>
  );
};
