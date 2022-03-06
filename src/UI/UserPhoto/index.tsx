import * as style from "./style";

type propsType = {
  imgUrl: string;
  diameterMM: string;
};

export const UserPhoto = (props: propsType) => {
  return (
    <>
      <style.userPhoto
        paramas={{
          imgUrl: props.imgUrl,
          diameterMM: props.diameterMM
        }}
      />
    </>
  );
};
