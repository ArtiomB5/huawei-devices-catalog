import "./styles.css";
import { useSelector } from "react-redux";
import { rootReducerType } from "./store";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export default function App() {
  let state = useSelector((state: rootReducerType) => state);
  let menuVisibility = useSelector(
    (state: rootReducerType) => state.menuVisibility
  );
  return (
    <div className="App">
      <Header visibility={state.visibility} />
      {menuVisibility.showMenu && <Main devices={state.devices} visibility={state.visibility} />}
      <Footer />
    </div>
  );
}
