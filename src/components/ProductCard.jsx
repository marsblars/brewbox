import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const getCategoryBadgeClass = (category) => {
        const classes = {
            coffee: 'badge-primary',
            tea: 'badge-teal',
            specialty: 'badge-accent',
            subscription: 'badge-outline'
        };
        return classes[category] || 'badge-primary';
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-card-image-wrapper">
                <img src={product.image} alt={product.name} className="product-card-image" />
                <span className={`badge ${getCategoryBadgeClass(product.category)} product-badge`}>
                    {product.category}
                </span>
            </div>

            <div className="product-card-content">
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-description">{product.description}</p>

                {product.flavorProfile && (
                    <div className="product-card-flavors">
                        {product.flavorProfile.slice(0, 3).map((flavor, index) => (
                            <span key={index} className="flavor-tag">{flavor}</span>
                        ))}
                    </div>
                )}

                <div className="product-card-footer">
                    <span className="product-card-price">${product.price.toFixed(2)}</span>
                    <button onClick={handleAddToCart} className="btn btn-primary btn-sm add-to-cart-btn">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
