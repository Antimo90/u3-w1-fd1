import "./App.css";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import MyTitle from "./components/MyTitle";
import Account from "./components/Account";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNav />
      <MyTitle />
      <h4 className="mb-3 ms-4 mt-3">Trending Now</h4>
      <Gallery movieSearch="Marvel" />
      <h4 className="mb-3 ms-4 mt-4">Watch it Again</h4>
      <Gallery movieSearch="lord of the rings" />
      <h4 className="mb-3 ms-4 mt-4">New Releases</h4>
      <Gallery movieSearch="harry potter" />
      <MyFooter />
    </>
  );
}

export default App;
