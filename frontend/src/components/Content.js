import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import Landing from '../pages/Landing';
import ProffessionDetails from '../pages/ProffessionDetails';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Logout from './Logout';
import RegisteredUsers from '../pages/RegisterList';

export default function Content() {
    const [role, setRole] = React.useState('');
    let navbar_admin = [];
    let navbar_user = [];
    let navbar_guest = [];

    React.useEffect(() => {
        refreshToken();
    });

    const refreshToken = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/token`);
            const decoded = jwt_decode(response.data.accessToken);
            setRole(decoded.role);
        } catch (error) {
            if(error.response){
                console.log(error.response.data.msg);
            }
        }
    };
    if(role === 'admin') {
        navbar_admin = [
            { href: '/registeredUsers', name: <RegisteredUsers />},
        ];
        navbar_user = [
            { href: '/logout', name: <Logout/>},
        ];
    }else if (role === 'user') {
        navbar_admin = [];
        navbar_user = [
            { href: '/logout', name: <Logout/>},
        ];
    } else {
        navbar_guest = [
            { href: '/login', name: <Login/> },
        ];
    }
    return (
        <main className="flex-shrink-0">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/programmer" element={<ProffessionDetails />} />
                    <Route path="/register" element={<Registration />} />
                    {navbar_admin.map((value) => (
                        <Route path={value.href} element={value.name}/>
                    ))}
                    {navbar_user.map((value) => (
                        <Route path={value.href} element={value.name}/>
                    ))}
                    {navbar_guest.map((value) => (
                        <Route path={value.href} element={value.name}/>
                    ))}
                </Routes>
            </Router>
        </main>
    )
}