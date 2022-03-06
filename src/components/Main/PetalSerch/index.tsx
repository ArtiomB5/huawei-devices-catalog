import { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootReducerType } from "../../../store";
import { CatalogCard } from "../../../utils/CatalogCard";
import { SetIds } from "../../../store/searchReducer";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons";
import * as style from "./style";

export const PetalSerch = () => {
  let [state, setState] = useState("");

  let devicesState = useSelector((state: rootReducerType) => state);
  let dispatch = useDispatch();
  let serchIds = (param: string) => {
    let smartphonesNamesFilter = devicesState.devices.smartphones
      .filter((l) =>
        JSON.stringify(l).toLowerCase().includes(param.toLowerCase())
      )
      .map((d) => d.DeviceID);
    let smartphonesSpecsFilter = devicesState.specs.smartphones
      .filter((l) =>
        JSON.stringify(l)
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(param.toLowerCase().replace(/\s/g, ""))
      )
      .map((d) => d.DeviceID);
    let tabletsNamesFilter = devicesState.devices.tablets
      .filter((l) =>
        JSON.stringify(l).toLowerCase().includes(param.toLowerCase())
      )
      .map((d) => d.DeviceID);
    let tabletsSpecsFilter = devicesState.specs.tablets
      .filter((l) =>
        JSON.stringify(l)
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(param.toLowerCase().replace(/\s/g, ""))
      )
      .map((d) => d.DeviceID);
    let laptopsNamesFilter = devicesState.devices.laptops
      .filter((l) =>
        JSON.stringify(l).toLowerCase().includes(param.toLowerCase())
      )
      .map((d) => d.DeviceID);
    let laptopsSpecsFilter = devicesState.specs.laptops
      .filter((l) =>
        JSON.stringify(l)
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(param.toLowerCase().replace(/\s/g, ""))
      )
      .map((d) => d.DeviceID);
    dispatch(
      SetIds({
        smartphones: [...smartphonesNamesFilter, ...smartphonesSpecsFilter],
        tablets: [...tabletsNamesFilter, ...tabletsSpecsFilter],
        laptops: [...laptopsNamesFilter, ...laptopsSpecsFilter]
      })
    );
  };

  let changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.currentTarget.value);
  };

  let clickHandler = () => {
    if (state.trim() !== "") {
      serchIds(state.trim());
    }
  };

  return (
    <style.petalSearch>
      <style.img
        src="https://search-static-dra.dbankcdn.com/pc/v1/static/img/petal-logo-light.398ed19f.svg"
        alt="Petal Serch"
      />
      <style.input>
        <style.textArea
          value={state}
          onChange={changeHandler}
          placeholder="You can find your dream device here!"
        />
        <style.button onClick={clickHandler}>
          <IconContext.Provider value={{ size: "2em" }}>
            <div>
              <AiOutlineSearch />
            </div>
          </IconContext.Provider>
        </style.button>
      </style.input>
      <style.cell>
        {devicesState.search.smartphones.length > 0 && <style.h1>Smartphones</style.h1>}
        {devicesState.devices.smartphones
          .filter((s1) => devicesState.search.smartphones.includes(s1.DeviceID))
          .map((s2) => (
            <CatalogCard>{s2}</CatalogCard>
          ))}
      </style.cell>
      <style.cell>
        {devicesState.search.tablets.length > 0 && <style.h1>Tablets</style.h1>}
        {devicesState.devices.tablets
          .filter((t1) => devicesState.search.tablets.includes(t1.DeviceID))
          .map((t2) => (
            <CatalogCard>{t2}</CatalogCard>
          ))}
      </style.cell>
      <style.cell>
        {devicesState.search.laptops.length > 0 && <style.h1>Laptops</style.h1>}
        {devicesState.devices.laptops
          .filter((l1) => devicesState.search.laptops.includes(l1.DeviceID))
          .map((l2) => (
            <CatalogCard>{l2}</CatalogCard>
          ))}
      </style.cell>
    </style.petalSearch>
  );
};
