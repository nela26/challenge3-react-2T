import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgProvider from "./context/apiProvider";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import SearchPokemon from "./views/SearchPokemon";
import DetailsPokemon from "./components/DetailsPokemon";

export default function App() { 
  return (
    <ImgProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<SearchPokemon />} />
          <Route path="/pokemon/:name" element={<DetailsPokemon />} />
        </Routes>
      </BrowserRouter>
    </ImgProvider>
  );
}


