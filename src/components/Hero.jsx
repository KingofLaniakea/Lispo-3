
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-block"
                >
                    <span className="hero-badge">Global Quality Standard</span>
                    <h1>Premium Products for <br /> <span className="text-accent">International Markets</span></h1>
                    <p>Your trusted partner in sourcing excellence. We deliver industrial, electronic, and consumer solutions worldwide with verified quality assurance.</p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Explore Catalog <ArrowRight size={20} />
                        </Link>
                        <a href="mailto:sales@globaltrade.com" className="btn btn-outline btn-lg">
                            Contact Sales
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
