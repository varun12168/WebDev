/** @jsx React.createElement */
const { useState, useEffect } = React;

const CATEGORIES = ['Starters','Mains','Beverages','Desserts','Chinese','Sushi','Pizza','Biryani'];

const TOP_SELLERS = [
  { id:1, name:'Paneer Tikka', price:320, orders:134, img:'// TODO: paneer-tikka.jpg' },
  { id:2, name:'Biryani Deluxe', price:420, orders:128, img:'// TODO: biryani.jpg' },
  { id:3, name:'Mango Lassi', price:150, orders:112, img:'// TODO: mango-lassi.jpg' },
  { id:4, name:'Gulab Jamun', price:180, orders:98, img:'// TODO: gulab-jamun.jpg' },
];

const PRODUCTS = {
  Starters: [
    { id:11, name:'Crispy Vegetable Spring Rolls', price:280, tags:['Veg','Popular'], img:'// TODO: spring-rolls.jpg' },
    { id:12, name:'Tandoori Chicken Wings', price:350, tags:['Non-Veg','Spicy'], img:'// TODO: chicken-wings.jpg' },
  ],
  Mains: [ /* TODO: fill in */ ],
  Beverages: [ /* TODO: fill in */ ],
  Desserts: [ /* TODO: fill in */ ],
  Chinese: [ /* TODO: fill in */ ],
  Sushi:    [ /* TODO: fill in */ ],
  Pizza:    [ /* TODO: fill in */ ],
  Biryani:  [ /* TODO: fill in */ ],
};

function App() {
  const [category, setCategory] = useState('Starters');
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart')) || []; }
    catch { return []; }
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = item => setCart([...cart, item]);
  const removeFromCart = idx =>
    setCart(cart.filter((_, i) => i !== idx));

  return (
    <div>
      <header className="header">
        <div className="logo">🍽 My Restaurant</div>
        <div className="cart-icon" onClick={()=>setShowCart(true)}>
          🛒<span className="badge">{cart.length}</span>
        </div>
      </header>

      <section className="section">
        <h2>Welcome to My Restaurant</h2>
        <p>Scan, Select &amp; Savor – Order your meal right from this page</p>
      </section>

      <section className="section top-sellers">
        {TOP_SELLERS.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <div className="price">₹{item.price}</div>
            <small>{item.orders} orders</small>
            <button onClick={()=>addToCart(item)}>+ Add</button>
          </div>
        ))}
      </section>

      <section className="section categories">
        {CATEGORIES.map(cat => (
          <div
            key={cat}
            className={`category-tab ${cat===category?'active':''}`}
            onClick={()=>setCategory(cat)}
          >{cat}</div>
        ))}
      </section>

      <section className="section products">
        {(PRODUCTS[category]||[]).map(prod=>(
          <div className="card" key={prod.id}>
            <img src={prod.img} alt={prod.name}/>
            <h4>{prod.name}</h4>
            <div>
              {prod.tags?.map(t=>(
                <small key={t} style={{marginRight:4}}>{t}</small>
              ))}
            </div>
            <div className="price">₹{prod.price}</div>
            <button onClick={()=>addToCart(prod)}>+ Add</button>
          </div>
        ))}
      </section>

      <div className={`cart-drawer ${showCart?'open':''}`}>
        <h3>Your Cart</h3>
        <button className="close" onClick={()=>setShowCart(false)}>✕</button>
        {cart.length === 0
          ? <p>Cart is empty</p>
          : cart.map((item,i)=>(
            <div className="cart-item" key={i}>
              <img src={item.img} alt={item.name}/>
              <div className="info">
                <strong>{item.name}</strong>
                <div>₹{item.price}</div>
              </div>
              <button className="remove" onClick={()=>removeFromCart(i)}>×</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
