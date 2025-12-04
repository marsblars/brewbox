import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Subscriptions.css';

const Subscriptions = () => {
    const subscriptionProducts = products.filter(p => p.category === 'subscription');

    return (
        <div className="subscriptions-page">
            <div className="subscriptions-hero">
                <div className="container">
                    <h1>Subscription Boxes</h1>
                    <p>Curated beverage experiences delivered monthly to your door</p>
                </div>
            </div>

            <div className="container">
                <div className="subscriptions-intro">
                    <h2>How Subscriptions Work</h2>
                    <div className="subscription-benefits">
                        <div className="benefit-item">
                            <div className="benefit-icon">💜</div>
                            <h3>Personalized</h3>
                            <p>Tell us your preferences and we'll customize each box to match your taste.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">📅</div>
                            <h3>Flexible</h3>
                            <p>Skip, pause, or cancel anytime. Change your delivery frequency as needed.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">💰</div>
                            <h3>Save Money</h3>
                            <p>Subscribers get exclusive discounts and early access to new products.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🎁</div>
                            <h3>Gift Ready</h3>
                            <p>All boxes come beautifully packaged and include tasting notes.</p>
                        </div>
                    </div>
                </div>

                <div className="subscriptions-products">
                    <h2>Choose Your Subscription</h2>
                    <div className="products-grid">
                        {subscriptionProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="subscription-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Can I customize my box?</h3>
                            <p>Absolutely! After subscribing, you'll fill out a taste profile quiz. You can update your preferences anytime to ensure you get beverages you'll love.</p>
                        </div>
                        <div className="faq-item">
                            <h3>When will I be charged?</h3>
                            <p>Your subscription renews monthly on the date you signed up. You'll receive an email notification before each charge.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I skip a month?</h3>
                            <p>Yes! Log into your account and skip any upcoming delivery. There's no limit to how many times you can skip.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What if I don't like something?</h3>
                            <p>Rate each item in your box and we'll use that feedback to improve future selections. Your satisfaction is our priority!</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can I give a subscription as a gift?</h3>
                            <p>Yes! You can purchase prepaid gift subscriptions for 3, 6, or 12 months. We'll include a personalized gift message.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How do I cancel?</h3>
                            <p>Cancel anytime from your account settings. No fees, no hassle. We'll be here whenever you want to rejoin!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
