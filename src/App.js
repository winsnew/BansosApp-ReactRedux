// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AidPage from './pages/AidPage';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">BansosApp</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aid">Disaster Distribution</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aid" element={<AidPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
