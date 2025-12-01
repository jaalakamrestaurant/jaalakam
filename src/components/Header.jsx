import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            // Close mobile menu when scrolling
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {isMobileMenuOpen && (
                <div
                    className="menu-backdrop"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="brand-logo">
                                <img src="/jaalakam-logo.jpg" alt="Jaalakam Logo" />
                            </div>
                            <div className="brand-text">
                                <h1 className="brand-title">Jaalakam</h1>
                                <p className="brand-tagline">Window to flavours of Kerala</p>
                            </div>
                        </div>

                        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                            <a href="#story" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}>
                                Our Story
                            </a>
                            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                                Gallery
                            </a>
                            <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>
                                Visit Us
                            </a>
                            <a
                                href="https://maps.app.goo.gl/JJpMhpVJm73mvMAd7?g_st=ipc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-sm"
                            >
                                Get Directions
                            </a>
                        </nav>

                        <button
                            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
