
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { companyInfo } from '../data/products';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="app-layout">
            <Navbar companyName={companyInfo.name} />
            <main>
                <Outlet />
            </main>
            <Footer companyInfo={companyInfo} />
        </div>
    );
};

export default Layout;
