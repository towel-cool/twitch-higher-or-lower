import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar'
import Home from "./pages/homePage";
import GamePage from "./pages/gamePage";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitchGame" element={<GamePage />} />
      </Routes>
    </Fragment>
      );
}

export default App;
