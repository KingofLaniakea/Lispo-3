
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container pt-navbar error-container">
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="page-detail pt-navbar">
            <div className="container">
                <button onClick={() => navigate(-1)} className="back-link">
                    <ArrowLeft size={20} /> Back to Catalog
                </button>

                <div className="detail-grid">
                    <motion.div
                        className="detail-image-col"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="detail-image-wrap">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </motion.div>

                    <motion.div
                        className="detail-content-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="detail-category">{product.category}</span>
                        <h1>{product.name}</h1>
                        <p className="detail-desc">{product.description}</p>

                        <div className="detail-features">
                            <h3>Key Features</h3>
                            <ul>
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={18} className="feature-icon-sm" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-actions">
                            <a href={`mailto:sales@globaltrade.com?subject=Inquiry about ${product.name}`} className="btn btn-primary btn-lg">
                                <Mail size={20} /> Inquire Now
                            </a>
                            <p className="inquiry-note">
                                Contact us for bulk pricing and shipping estimates.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
