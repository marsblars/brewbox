import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="product-detail-page">
            <div className="container">
                <Link to="/products" className="back-link">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Back to Products
                </Link>

                <div className="product-detail-content">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-detail-info">
                        <span className="badge badge-primary product-category">
                            {product.category}
                        </span>

                        <h1>{product.name}</h1>

                        <p className="product-detail-description">{product.description}</p>

                        <div className="product-price-section">
                            <span className="product-detail-price">${product.price.toFixed(2)}</span>
                            {product.format && <span className="product-format">{product.format}</span>}
                        </div>

                        {/* Product Details */}
                        <div className="product-meta">
                            {product.originCountry && (
                                <div className="meta-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                                        <circle cx="12" cy="9" r="2.5"></circle>
                                    </svg>
                                    <span><strong>Origin:</strong> {product.originCountry}</span>
                                </div>
                            )}

                            {product.caffeineLevel && (
                                <div className="meta-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                        <line x1="6" y1="1" x2="6" y2="4"></line>
                                        <line x1="10" y1="1" x2="10" y2="4"></line>
                                        <line x1="14" y1="1" x2="14" y2="4"></line>
                                    </svg>
                                    <span><strong>Caffeine:</strong> {product.caffeineLevel}</span>
                                </div>
                            )}

                            {product.roastLevel && (
                                <div className="meta-item">
                                    <span><strong>Roast Level:</strong> {product.roastLevel}</span>
                                </div>
                            )}

                            {product.teaType && (
                                <div className="meta-item">
                                    <span><strong>Type:</strong> {product.teaType}</span>
                                </div>
                            )}
                        </div>

                        {/* Flavor Profile */}
                        {product.flavorProfile && (
                            <div className="flavor-section">
                                <h3>Flavor Profile</h3>
                                <div className="flavor-tags-large">
                                    {product.flavorProfile.map((flavor, index) => (
                                        <span key={index} className="flavor-tag-large">{flavor}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Brewing Tips */}
                        {product.brewingTip && (
                            <div className="brewing-section">
                                <h3>Brewing Tips</h3>
                                <p>{product.brewingTip}</p>
                            </div>
                        )}

                        {/* Subscription info */}
                        {product.contents && (
                            <div className="subscription-info">
                                <h3>What's Included</h3>
                                <p>{product.contents}</p>
                                {product.customizable && (
                                    <p className="customizable-note">✨ Fully customizable based on your preferences</p>
                                )}
                            </div>
                        )}

                        {/* Add to Cart Section */}
                        <div className="add-to-cart-section">
                            <div className="quantity-selector">
                                <button onClick={decreaseQuantity} className="quantity-btn-large">-</button>
                                <span className="quantity-display">{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-btn-large">+</button>
                            </div>

                            <button onClick={handleAddToCart} className="btn btn-primary btn-lg add-to-cart-large">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
