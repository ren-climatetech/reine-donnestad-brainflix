import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react"; //this is a called a hook
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UploadButton from "./components/UploadButton/UploadButton";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BASE_URL, API_KEY } from "../utils.js";

import "./App.scss";

function App() {
  console.log("App component rendered");

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="header__layout">
            <Header className="header__layout-component" />
            <div className="header__layout-component">
              <Search />
              <UploadButton />
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={<HomePage />} />
          <Route path="/uploadpage" element={<UploadPage to="/upload" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
