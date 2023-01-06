import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar'
import Home from "./pages/homePage";
import GameScreen from "./pages/gameScreen"; 

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitchGame" element={<GameScreen />} />
      </Routes>
    </Fragment>
      );
}

export default App;
