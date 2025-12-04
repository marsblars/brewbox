import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container">
                <div className="hero-content">
                    <span className="hero-badge">Premium Beverage Subscriptions</span>
                    <h1 className="hero-title">
                        Discover Your Perfect
                        <span className="hero-title-gradient"> Brew</span>
                    </h1>
                    <p className="hero-description">
                        Curated boxes of premium teas, coffees, and specialty drinks delivered monthly.
                        Explore global flavors, support artisan roasters, and elevate your daily ritual.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Shop Products
                        </Link>
                        <Link to="/subscriptions" className="btn btn-secondary btn-lg">
                            View Subscriptions
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
