import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { togglefavorite } from "../slices/favoriteslice";

export default function CityCard({ city }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.cities);
  const isfav = favorites.includes(city.id);

  const unit = useSelector(state => state.unit.unit);

  let displayTemp;
  if (unit === "c") displayTemp = city.temp;
  else if (unit === "f") displayTemp = city.temp * 9/5 + 32;
  else if (unit === "k") displayTemp = city.temp + 273.15;

  return (
    <div className={`card ${isfav ? "fav" : ""}`}>
      <Link to={`/city/${city.id}`}>
        <h3>{city.name}</h3>
        <p>{Math.round(displayTemp)}°{unit.toUpperCase()}</p>
        <span>{city.icon}</span>
      </Link>
      <button onClick={() => dispatch(togglefavorite(city.id))}>
        {isfav ? "⭐" : "☆"}
      </button>
    </div>
  );
}
