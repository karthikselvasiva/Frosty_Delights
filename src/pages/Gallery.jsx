import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: "/src/assets/gallery_1_1777718662768.png", alt: "Ice cream cone against sky" },
    { src: "/src/assets/gallery_2_1777718687921.png", alt: "Bowl of colorful scoops" },
    { src: "/src/assets/gallery_3_1777718706163.png", alt: "Three aesthetic cones" },
    { src: "/src/assets/hero_icecream_1777718552903.png", alt: "Delicious cones assortment" },
    { src: "/src/assets/menu_sundae_1777718568808.png", alt: "Chocolate sundae" },
    { src: "/src/assets/menu_milkshake_1777718647261.png", alt: "Mint milkshake" },
  ];

  return (
    <div className="gallery-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Sweet Memories</h1>
          <p>A glimpse into our colorful world of Frosty Delights.</p>
        </div>
      </div>

      <div className="container section">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
