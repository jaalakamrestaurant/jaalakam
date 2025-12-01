import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/jaalakam-logo.jpg" alt="Jaalakam" />
                        </div>
                        <h3>Jaalakam</h3>
                        <p className="footer-tagline">Window to flavours of Kerala</p>
                        <p className="footer-description">
                            Authentic Kerala restaurant in Bengaluru serving homely food made with
                            coconut oil, ghee and freshly ground spices.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#story">Our Story</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#location">Visit Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Location</h4>
                            <address>
                                Shop #11, Vibez Gully Gate<br />
                                Sannatammanahalli, Goravigere<br />
                                Bengaluru, Karnataka 560049
                            </address>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://maps.app.goo.gl/JJpMhpVJm73mvMAd7?g_st=ipc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📍 Google Maps
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://share.google/DFalWeM3m2wDWtzE1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ⭐ Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p className="footer-company">
                            <strong>Jaalakam</strong> powered by <strong>Elite Quad Ventures</strong>
                        </p>
                        <p className="footer-gst">
                            GST: <strong>29AALFE4440K1Z4</strong>
                        </p>
                    </div>
                    <p className="footer-copyright">
                        © {currentYear} Jaalakam – Window to flavours of Kerala. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
