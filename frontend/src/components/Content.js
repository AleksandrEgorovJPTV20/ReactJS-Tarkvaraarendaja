import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

export default function Content() {
    return (
        <main className="flex-shrink-0">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </Router>
        </main>
    )
}