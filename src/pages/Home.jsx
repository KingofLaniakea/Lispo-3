
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { Ship, ShieldCheck, Globe } from 'lucide-react';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    const features = [
        { icon: <Globe size={32} />, title: "Global Shipping", desc: "Reliable logistics partners ensuring timely delivery worldwide." },
        { icon: <ShieldCheck size={32} />, title: "Quality Assured", desc: "Every product undergoes rigorous inspection before dispatch." },
        { icon: <Ship size={32} />, title: "Bulk Export", desc: "Specialized in handling large-volume industrial orders." },
    ];

    return (
        <div className="home-page">
            <Hero />

            <section className="section-featured section-padding">
                <div className="container">
                    <div className="section-header">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Featured Products
                        </motion.h2>
                        <p className="subtitle">Discover our best-selling solutions for international markets.</p>
                    </div>
                    <div className="grid-products">
                        {featuredProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-features section-padding bg-light">
                <div className="container">
                    <div className="grid-features">
                        {features.map((f, index) => (
                            <motion.div
                                className="feature-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
