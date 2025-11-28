import './Location.css';

const Location = () => {
    return (
        <section id="location" className="location section">
            <div className="container">
                <div className="section-header">
                    <span className="tag">Visit Us</span>
                    <h2>Find Jaalakam in Bengaluru</h2>
                    <p className="section-subtitle">
                        Come experience authentic Kerala cuisine in the heart of Bengaluru
                    </p>
                </div>

                <div className="location-grid">
                    <div className="location-card">
                        <h3>Our Address</h3>
                        <address>
                            <p>
                                <strong>Shop #11, Vibez Gully Gate</strong><br />
                                Sannatammanahalli, Goravigere<br />
                                Bengaluru, Karnataka 560049
                            </p>
                        </address>

                        <div className="location-actions">
                            <a
                                href="https://maps.app.goo.gl/JJpMhpVJm73mvMAd7?g_st=ipc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Get Directions
                            </a>
                            <a
                                href="https://share.google/DFalWeM3m2wDWtzE1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                View Reviews
                            </a>
                        </div>
                    </div>

                    <div className="info-card">
                        <h3>What to Expect</h3>
                        <ul className="info-list">
                            <li>
                                <span className="check-icon">✓</span>
                                Authentic Kerala meals, snacks and specials
                            </li>
                            <li>
                                <span className="check-icon">✓</span>
                                Food cooked only with coconut oil & ghee
                            </li>
                            <li>
                                <span className="check-icon">✓</span>
                                No artificial colours, additives or baking soda
                            </li>
                            <li>
                                <span className="check-icon">✓</span>
                                Own freshly ground spices for consistent, homely taste
                            </li>
                            <li>
                                <span className="check-icon">✓</span>
                                Warm, family-style ambiance with Kerala vibes
                            </li>
                        </ul>

                        <div className="info-tags">
                            <span className="badge">Homely Kerala Food</span>
                            <span className="badge">Family & Friends</span>
                            <span className="badge">Bengaluru</span>
                        </div>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <div>
                            <h4>Powered By</h4>
                            <p>Elite Quad Ventures</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div>
                            <h4>Cuisine Type</h4>
                            <p>Authentic Kerala</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div>
                            <h4>Specialty</h4>
                            <p>Traditional Homely Food</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
