
import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        return activeCategory === 'All'
            ? products
            : products.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="page-products pt-navbar">
            <div className="container">
                <div className="products-header">
                    <h1>Product Catalog</h1>
                    <p>Explore our comprehensive range of high-quality export goods.</p>
                </div>

                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="grid-products"
                    layout
                >
                    {filteredProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="empty-state">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
