import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>The passion and craft behind every scoop.</p>
        </div>
      </div>

      <div className="container section">
        <div className="about-content">
          <div className="about-text">
            <h2>Crafted with Love, Since 2024</h2>
            <p>
              Welcome to Frosty Delights, where every scoop is a masterpiece. We started with a simple mission: to create the most delicious, high-quality ice cream using only natural, locally-sourced ingredients.
            </p>
            <p>
              Our ice cream is handcrafted daily in small batches to ensure maximum freshness and flavor. We believe in classic techniques mixed with modern, innovative flavor profiles that excite your taste buds.
            </p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <h4>100% Natural</h4>
                <p>No artificial colors or flavors.</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🐄</span>
                <h4>Local Dairy</h4>
                <p>Sourced from happy local cows.</p>
              </div>
              <div className="feature">
                <span className="feature-icon">👩‍🍳</span>
                <h4>Handcrafted</h4>
                <p>Made fresh daily in our kitchen.</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/about_shop_1777718584779.png" alt="Inside Frosty Delights" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
