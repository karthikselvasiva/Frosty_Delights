import { useState, useEffect } from 'react';

import menuData from '../data/menu.json';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    // Extract categories and all items from data
    const catNames = menuData.categories.map(c => c.name);
    setCategories(['All', ...catNames]);
    
    const items = menuData.categories.reduce((acc, cat) => {
      return [...acc, ...cat.items.map(item => ({ ...item, category: cat.name }))];
    }, []);
    setAllItems(items);
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Explore our delicious range of handcrafted ice creams, sundaes, and shakes.</p>
        </div>
      </div>

      <div className="container section">
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-wrapper">
                <img src={`/${item.image}`} alt={item.name} className="menu-img" />
              </div>
              <div className="menu-content">
                <div className="menu-header">
                  <h3>{item.name}</h3>
                  <span className="price">₹{item.price.toFixed(2)}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
