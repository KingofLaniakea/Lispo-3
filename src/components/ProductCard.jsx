
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.css';

const resolveImg = (path) => {
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="product-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <Link to={`/products/${product.id}`} className="card-link">
                <div className="card-image-wrap">
                    <img src={resolveImg(product.image)} alt={product.name} loading="lazy" />
                    <div className="card-category">{product.category}</div>
                </div>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <p className="card-desc">{product.description.substring(0, 60)}...</p>
                    <span className="btn-text">View Details &rarr;</span>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
