import { useState } from "react";
import { cities } from "../data/cities";
import CityCard from "../components/citycard";

export default function CityList() {
  const [search, setsearch] = useState("");

  const filtered = cities.filter(c =>
    c.name.includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="szukaj miasta"
        onChange={e => setsearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(city => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
