import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const featuredProducts = getFeaturedProducts();

    return (
        <div className="home-page">
            <Hero />

            {/* Features Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Why Choose BrewBox?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Global Discovery</h3>
                            <p>Explore authentic teas and coffees from artisan roasters and tea gardens worldwide.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✨</div>
                            <h3>Personalized</h3>
                            <p>Curated selections based on your taste preferences, caffeine needs, and lifestyle.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📦</div>
                            <h3>Convenient</h3>
                            <p>Delivered right to your door with flexible subscription options and one-time purchases.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌱</div>
                            <h3>Sustainable</h3>
                            <p>Eco-friendly packaging and support for sustainable farming practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Products</h2>
                        <Link to="/products" className="btn btn-secondary">View All</Link>
                    </div>
                    <div className="products-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">How It Works</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Choose Your Box</h3>
                            <p>Select from coffee, tea, specialty drinks, or our ultimate mixed box.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Customize</h3>
                            <p>Tell us your preferences: flavor profiles, caffeine levels, and formats.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Receive & Enjoy</h3>
                            <p>Get your curated box monthly with brewing tips and origin stories.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Elevate Your Daily Ritual?</h2>
                        <p>Join thousands of beverage enthusiasts discovering new flavors every month.</p>
                        <Link to="/subscriptions" className="btn btn-accent btn-lg">
                            Start Your Subscription
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
