import './Story.css';

const Story = () => {
    return (
        <section id="story" className="story section">
            <div className="container">
                <div className="section-header">
                    <span className="tag">Our Story</span>
                    <h2>The Family of Friends Behind Jaalakam</h2>
                </div>

                <div className="story-content">
                    <div className="story-card main-story">
                        <p>
                            Jaalakam, a vibrant haven of authentic Kerala cuisine, is the brainchild of a
                            well-knit family of friends. Bound by their shared love for Kerala's rich culinary
                            heritage and a passion for the beautiful game of football, they embarked on this
                            culinary journey.
                        </p>
                        <p>
                            Jaalakam, meaning <strong>"window"</strong> in Malayalam, perfectly encapsulates
                            the restaurant's ethos. It's a window into the heart of Kerala, offering a glimpse
                            into the diverse and delectable cuisine that the region boasts. From the fiery
                            flavours of Malabar & Travancore-Kochi to the delicate coconut-infused dishes of
                            the coast, Jaalakam brings the essence of Kerala to every plate.
                        </p>
                    </div>

                    <div className="story-grid">
                        <div className="story-card">
                            <h3>Our Philosophy</h3>
                            <p>
                                The stubbornness of only using coconut oil and ghee and no other oils, not using
                                any additives and added colours, not using any baking soda, not using any packaged
                                food, only using our own ground spices to offer simple homely food with consistency
                                was a very conscious decision we took.
                            </p>
                        </div>

                        <div className="story-card">
                            <h3>More Than Food</h3>
                            <p>
                                Jaalakam is more than just a restaurant; it's a celebration of friendship, family,
                                and the vibrant culture of Kerala. The warm ambiance, infused with the aroma of
                                freshly ground spices and the sounds of traditional Kerala music, creates an
                                unforgettable dining experience.
                            </p>
                        </div>
                    </div>

                    <div className="story-highlight">
                        <p className="highlight-text">
                            At Jaalakam, every plate is a memory – of homes in Kerala, of games watched together,
                            of friendships that turned into family.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
