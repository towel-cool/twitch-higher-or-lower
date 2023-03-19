import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar'
import Home from "./pages/homePage";
import GamePage from "./pages/gamePage";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hlGame" element={<GamePage />} />
      </Routes>
      <Footer />
    </Fragment>
      );
}

export default App;
