import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ProffessionDetails from '../pages/ProffessionDetails';
import Registration from '../pages/Registration';

export default function Content() {
    return (
        <main className="flex-shrink-0">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/programmer" element={<ProffessionDetails />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </Router>
        </main>
    )
}