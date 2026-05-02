import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="ice-cream-loader">
        <div className="scoop top"></div>
        <div className="scoop middle"></div>
        <div className="cone"></div>
      </div>
      <h2>Scooping happiness...</h2>
    </div>
  );
};

export default Loader;
