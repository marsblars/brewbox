import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>About BrewBox</h1>
                    <p className="about-tagline">
                        Bringing the world's finest beverages to your doorstep
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container container-sm">
                    <h2 className="text-center">Our Story</h2>
                    <div className="about-content">
                        <p>
                            BrewBox was born from a simple idea: everyone deserves to experience the rich diversity
                            of global beverage culture without leaving their home. We noticed that while meal kit
                            services like HelloFresh were revolutionizing home cooking, there wasn't a major platform
                            dedicated exclusively to beverages.
                        </p>
                        <p>
                            Founded in 2024, we set out to fill that gap by creating a personalized subscription
                            service that brings premium teas, coffees, and specialty drinks from artisan producers
                            around the world directly to your door.
                        </p>
                        <p>
                            Today, BrewBox serves thousands of beverage enthusiasts who trust us to curate exceptional
                            drinking experiences tailored to their unique tastes and preferences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="text-center mb-3xl">Our Mission & Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🌍</div>
                            <h3>Global Discovery</h3>
                            <p>
                                We partner with artisan roasters and tea gardens worldwide to bring you authentic,
                                ethically sourced beverages you won't find in your local store.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">💚</div>
                            <h3>Sustainability</h3>
                            <p>
                                Every product is sourced from farms committed to sustainable practices. Our packaging
                                is eco-friendly and designed to minimize environmental impact.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3>Quality First</h3>
                            <p>
                                We taste-test every product before it reaches you. Only the finest teas, coffees,
                                and specialty drinks make it into our curated boxes.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Personalization</h3>
                            <p>
                                Your taste profile guides our selections. We learn from your feedback to continuously
                                improve and customize your monthly boxes.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Fair Trade</h3>
                            <p>
                                We believe in fair compensation for producers. Our partnerships ensure farmers and
                                artisans receive fair wages for their exceptional products.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">📚</div>
                            <h3>Education</h3>
                            <p>
                                Each box includes detailed tasting notes, brewing guides, and stories about the
                                people and places behind your beverages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Curate */}
            <section className="section">
                <div className="container container-sm">
                    <h2 className="text-center">How We Curate</h2>
                    <div className="curation-process">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Source</h3>
                                <p>
                                    Our team travels the world to discover exceptional beverages from small-batch
                                    producers, family-owned tea gardens, and award-winning roasters.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Taste</h3>
                                <p>
                                    Every product undergoes rigorous taste testing by our expert panel. We evaluate
                                    flavor profiles, quality, and uniqueness before approval.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Match</h3>
                                <p>
                                    Using your taste profile and preferences, our algorithm selects products perfectly
                                    suited to your palate while introducing new, exciting flavors.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Deliver</h3>
                                <p>
                                    We package your selections with care in eco-friendly materials and ship directly
                                    to your door with detailed brewing guides and tasting notes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Countries Sourced From</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Happy Subscribers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Artisan Partners</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="about-cta">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Join thousands of beverage enthusiasts discovering new flavors from around the world.
                        </p>
                        <div className="about-cta-buttons">
                            <a href="/subscriptions" className="btn btn-primary btn-lg">
                                Explore Subscriptions
                            </a>
                            <a href="/products" className="btn btn-secondary btn-lg">
                                Shop Products
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
