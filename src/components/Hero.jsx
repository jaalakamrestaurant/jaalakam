import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className={`hero ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-tag">
                            <span className="tag">Authentic Kerala Kitchen</span>
                        </div>

                        <h1 className="hero-title">
                            A <span className="gradient-text">window</span> to the true flavours of Kerala
                        </h1>

                        <p className="hero-subtitle">
                            Homely food made with coconut oil, ghee, and freshly ground spices –
                            no additives, no artificial colours, no shortcuts. Just Kerala, on your plate.
                        </p>

                        <div className="hero-actions">
                            <a
                                href="https://maps.app.goo.gl/JJpMhpVJm73mvMAd7?g_st=ipc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Open in Google Maps
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

                        <div className="hero-info">
                            <div className="info-item">
                                <span className="info-text">Vibez Gully Gate, Sannatammanahalli, Bengaluru</span>
                            </div>
                            <div className="info-item">
                                <span className="info-text"></span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-card-wrapper">
                        <div className="hero-card">
                            <div className="hero-card-glow"></div>
                            <div className="hero-card-content">
                                <div className="hero-card-header">
                                    <div className="hero-card-logo">
                                        <img src="/jaalakam-logo.jpg" alt="Jaalakam" />
                                    </div>
                                    <div className="hero-card-title-group">
                                        <h3 className="hero-company-name">Jaalakam</h3>
                                        <p className="hero-company-tagline">WINDOW TO FLAVOURS OF KERALA</p>
                                    </div>
                                </div>

                                <div className="hero-card-text">

                                    <h3 className="hero-card-title">Simple, homely & honest food</h3>
                                    <p className="hero-card-description">
                                        Only coconut oil & ghee. No baking soda. No packaged mixes.
                                        No added colours. Just our own freshly ground spices and a lot of love.
                                    </p>
                                </div>
                            </div>

                            <div className="hero-badge">
                                <span className="status-dot"></span>
                                <span>Now serving in Bengaluru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-decoration">
                <div className="decoration-circle decoration-1"></div>
                <div className="decoration-circle decoration-2"></div>
                <div className="decoration-circle decoration-3"></div>
            </div>
        </section>
    );
};

export default Hero;
