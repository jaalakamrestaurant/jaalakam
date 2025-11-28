import './Gallery.css';

const Gallery = () => {
    const images = [
        {
            src: '/kerala-sadya.png',
            alt: 'Authentic Kerala Sadya Meal',
            title: 'Traditional Kerala Sadya',
            description: 'Served on banana leaf with love'
        },
        {
            src: '/kerala-fish-curry.png',
            alt: 'Kerala Fish Curry',
            title: 'Meen Curry',
            description: 'Fresh fish in coconut gravy'
        },
        {
            src: '/restaurant-interior.png',
            alt: 'Jaalakam Restaurant Interior',
            title: 'Warm & Welcoming',
            description: 'Traditional Kerala ambiance'
        }
    ];

    const features = [
        {
            title: 'Coconut Oil & Ghee',
            description: 'Traditional cooking methods'
        },
        {
            title: 'Fresh Ground Spices',
            description: 'Our own spice blends'
        },
        {
            title: 'No Additives',
            description: 'Pure & natural ingredients'
        },
        {
            title: 'Made with Love',
            description: 'Homely Kerala flavours'
        }
    ];

    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <div className="section-header">
                    <span className="tag">Gallery</span>
                    <h2>A Taste of Kerala</h2>
                    <p className="section-subtitle">
                        Experience the authentic flavours and warm ambiance of Jaalakam
                    </p>
                </div>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="gallery-image-wrapper">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
