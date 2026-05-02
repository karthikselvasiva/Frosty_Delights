import { X, Trash2, Plus, Minus } from 'lucide-react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, closeCart, items, removeFromCart, updateQuantity }) => {
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={closeCart}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={closeCart} aria-label="Close Cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🍦</span>
              <p>Your cart is empty.</p>
              <button className="btn btn-primary" onClick={closeCart}>Browse Menu</button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={`/src/assets/${item.image}`} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">₹{item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14}/></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14}/></button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={() => alert('Checkout flow not implemented in this demo.')}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
