
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ companyName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        // { name: 'About', path: '/about' },
        // { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <Globe className="logo-icon" />
                    <span>{companyName}</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    className="active-indicator"
                                    layoutId="underline"
                                />
                            )}
                        </Link>
                    ))}
                    <a href="mailto:contact@globaltrade.com" className="btn btn-primary btn-sm">
                        Contact Us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="mailto:contact@globaltrade.com" className="btn btn-primary mobile-btn">Contact Us</a>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
