import "./App.css";
import MovieForm from "./components/MovieForm";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

import { PathRoutes } from "./routes/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathRoutes.Home} element={<Home />} />
        <Route path={PathRoutes.Form} element={<MovieForm />} />
        <Route path={PathRoutes.Movies} element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
