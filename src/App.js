import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './component/HeroPage';
import Services from './component/Services'; // Create this page
import Careers from './component/careers';
import StaticMapNagpur from './component/Location'; // Create this page
import Header from './component/Header'; // Create this component
function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/locations" element={<StaticMapNagpur />} />
            </Routes>
        </Router>
    );
}

export default App;

