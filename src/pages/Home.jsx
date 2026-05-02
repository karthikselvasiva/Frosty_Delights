import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge">100% Natural Ingredients</span>
            <h1>Scoops of <span className="highlight">Happiness</span> in Every Bite</h1>
            <p>Experience the joy of our premium, hand-crafted ice cream. Made fresh daily with love and the finest ingredients.</p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Order Now <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Flavors</span>
              </div>
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat rating">
                <div className="stars">
                  <Star fill="#ffb6c1" color="#ffb6c1" size={20} />
                  <Star fill="#ffb6c1" color="#ffb6c1" size={20} />
                  <Star fill="#ffb6c1" color="#ffb6c1" size={20} />
                  <Star fill="#ffb6c1" color="#ffb6c1" size={20} />
                  <Star fill="#ffb6c1" color="#ffb6c1" size={20} />
                </div>
                <span className="stat-label">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="blob"></div>
            <img src="/src/assets/hero_icecream_1777718552903.png" alt="Delicious Ice Cream" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Popular Flavors Preview */}
      <section className="section popular-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Customer Favorites</h2>
            <p className="section-subtitle">Discover the flavors our customers can't get enough of.</p>
          </div>
          
          <div className="popular-grid">
            <div className="popular-card">
              <img src="/src/assets/menu_scoops_1777718628989.png" alt="Strawberry Dream" />
              <h3>Strawberry Dream</h3>
              <p>Fresh strawberries folded into sweet cream.</p>
            </div>
            <div className="popular-card">
              <img src="/src/assets/menu_sundae_1777718568808.png" alt="Berry Chocolate Sundae" />
              <h3>Berry Chocolate Sundae</h3>
              <p>The perfect blend of chocolate and berries.</p>
            </div>
            <div className="popular-card">
              <img src="/src/assets/menu_milkshake_1777718647261.png" alt="Mint Choco Shake" />
              <h3>Mint Choco Shake</h3>
              <p>Refreshing mint with rich chocolate chips.</p>
            </div>
          </div>
          
          <div className="text-center mt-3">
            <Link to="/menu" className="btn btn-secondary">View Full Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
