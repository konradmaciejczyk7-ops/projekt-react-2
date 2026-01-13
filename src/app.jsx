import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import CityList from "./pages/citylist";
import CityDetails from "./pages/citydetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
