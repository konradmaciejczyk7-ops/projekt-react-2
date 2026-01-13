import { useDispatch} from "react-redux";
import { setunit } from "../slices/unitslice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1>wieża pogodowa</h1>
      <div>
        <button onClick={() => dispatch(setunit("c"))}>°c</button>
        <button onClick={() => dispatch(setunit("f"))}>°f</button>
        <button onClick={() => dispatch(setunit("k"))}>k</button>
      </div>
    </header>
  );
}
