import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import PortfolioPage from "./components/pages/Portfolio";
// import FeedPage from "./components/pages/Feed";
import DropzoneComponent from "./components/pages/Dropzone"
import { resolve } from "path";
import { setTimeout } from "timers/promises";

const FeedPage = React.lazy(() => import("./components/pages/Feed"))

function App() {

  let Dark = '#28383A';
  let Dark_green = '#04B597';
  let Mint_green = '#8CF5C9';
  let Light = '#FAF0F0'
  const [dark, setdark] = useState(Dark);
  const [drakgreen, setdarkgreen] = useState(Dark_green);
  const [mintgreen, setmintgreen] = useState(Mint_green);
  const [light, setlight] = useState(Light);

  return (


    <div className="App" style={{ background: dark, minHeight: '100vh'}}>
      <BrowserRouter>
        <React.Suspense fallback={
          <div>
            Loading...
            <img src="loading.png" width={"200px"} height={"200px"} />
          </div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/drop" element={<DropzoneComponent/>} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
