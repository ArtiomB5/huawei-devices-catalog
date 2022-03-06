import * as style from "./style";
import { ChangeEvent } from "react";

type propsType = {
  type: "email" | "text" | "password";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: propsType) => {
  return (
    <style.input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
