import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* ✅ Navbar */}
            <NavBar />

            {/* ✅ תוכן עמודים */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>

            {/* ✅ Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
