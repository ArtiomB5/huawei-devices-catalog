import * as style from "./style";

export const Loading = () => {
  const logo =  require("../../imgs/logo.png");
  return (
    <style.Loading>
      <div>
        <style.img src={logo} alt="Huawei Device Gallery"/>
      </div>
      <style.LoadingLine></style.LoadingLine>
    </style.Loading>
  );
};
