import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Register from './pages/Register';
import Freelances from './pages/Freelances';
import Fetch from './pages/Fetch';
import FetchSheet from "./pages/FetchSheet";
import About from './pages/About';
import Calendar from "./pages/Calendar";
import CalendarYear from "./pages/CalendarYear";
import Error from './components/Error';

import {Setup} from "./utils/setup";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { ThemeContext } from "./utils/ThemeContext";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" replace />;
    return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="black">
        <Router>
            <Setup />
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/reservation" element={<ProtectedRoute><Reservation /></ProtectedRoute>} />
                <Route path="/freelances" element={<ProtectedRoute><Freelances /></ProtectedRoute>} />
                <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
                <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
                <Route path="/fetch" element={<ProtectedRoute><Fetch /></ProtectedRoute>} />
                <Route path="/fetch-sheet" element={<ProtectedRoute><FetchSheet /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
                <Route path="/calendar/:year" element={<ProtectedRoute><CalendarYear /></ProtectedRoute>} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </ThemeContext.Provider>
  </React.StrictMode>
);
reportWebVitals();
