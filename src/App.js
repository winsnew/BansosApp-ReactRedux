// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AidPage from "./pages/AidPage";
import AidLoc from "./pages/AidLoc";
import DataPenduduk from "./pages/DataPenduduk";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationProvider from "./api/locContext";
import PendudukProvider from "./api/pendudukContext";
import "./App.css";

function App() {
  return (
    <Router>
      <LocationProvider>
        <PendudukProvider>
        <Header />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              BansosApp
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aidloc">
                    Disaster Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dataPenduduk">
                    Data Population
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/aid" element={<AidPage />} /> */}
            <Route path="/aidloc" element={<AidLoc />} />
            <Route path="/dataPenduduk" element={<DataPenduduk />} />
          </Routes>
        </div>
        </PendudukProvider>
      </LocationProvider>
    </Router>
  );
}

export default App;
