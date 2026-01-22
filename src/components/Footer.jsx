
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = ({ companyInfo }) => {
    return (
        <footer className="footer">
            <div className="container grid-footer">
                <div className="footer-col">
                    <h3>{companyInfo.name}</h3>
                    <p>{companyInfo.tagline}</p>
                    <div className="socials">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><Mail size={16} /> {companyInfo.contact.email}</li>
                        <li><Phone size={16} /> {companyInfo.contact.phone}</li>
                        <li><MapPin size={16} /> {companyInfo.contact.address}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
