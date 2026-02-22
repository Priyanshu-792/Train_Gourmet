import { useState } from 'react'
import './Menu.css'

const categories = ['All', 'Snacks', 'Recommended', 'Combos']

const menuItems = [
  { id: 1, category: 'Snacks', name: 'Veg Schezwan Hakka Noodles', desc: 'Wok-tossed noodles with fresh vegetables and spicy Schezwan sauce', emoji: '🍜', tag: 'Veg', popular: false },
  { id: 2, category: 'Snacks', name: 'Paneer Schezwan Noodles', desc: 'Creamy paneer cubes tossed with noodles in Schezwan sauce', emoji: '🍜', tag: 'Veg', popular: true },
  { id: 3, category: 'Snacks', name: 'Paneer Noodles', desc: 'Delicate paneer pieces stir-fried with noodles and fresh vegetables', emoji: '🍜', tag: 'Veg', popular: false },
  { id: 4, category: 'Snacks', name: 'Egg Schezwan Hakka Noodles', desc: 'Egg-tossed noodles with a fiery Schezwan punch and crisp vegetables', emoji: '🍜', tag: 'Egg', popular: false },
  { id: 5, category: 'Snacks', name: 'Chicken Schezwan Hakka Noodles', desc: 'Tender chicken strips with spicy Schezwan noodles for a flavour-packed meal', emoji: '🍜', tag: 'Non-Veg', popular: true },
  { id: 6, category: 'Snacks', name: 'Chilli Chicken', desc: 'Crispy chicken tossed in a tangy, spicy Indo-Chinese chilli sauce', emoji: '🍗', tag: 'Non-Veg', popular: true },
  { id: 7, category: 'Recommended', name: 'Shahi Matar Paneer Thali', desc: 'Royal green peas and paneer curry served with rice, roti, dal, raita and pickle', emoji: '🍛', tag: 'Veg', popular: true },
  { id: 8, category: 'Recommended', name: 'Shahi Queen Thali', desc: 'An elaborate vegetarian feast with dal, sabzi, paneer curry, rice, roti, raita and dessert', emoji: '🍱', tag: 'Veg', popular: false },
  { id: 9, category: 'Recommended', name: 'Shahi King Thali', desc: 'The ultimate thali experience with multiple curries, rice, breads, dal, raita and sweet', emoji: '🍱', tag: 'Veg', popular: false },
  { id: 10, category: 'Recommended', name: 'Shahi Egg Dinner Special', desc: 'Egg curry, egg bhurji, rice, roti, dal and raita — a wholesome egg dinner', emoji: '🥚', tag: 'Egg', popular: false },
  { id: 11, category: 'Recommended', name: 'Shahi Kadai Chicken Thali', desc: 'Bold kadai chicken with aromatic spices, rice, roti, dal and refreshing raita', emoji: '🍗', tag: 'Non-Veg', popular: true },
  { id: 12, category: 'Recommended', name: 'Shahi Chicken Dinner Special', desc: 'Chicken curry, rice, roti, dal, raita and pickle — a complete hearty dinner', emoji: '🍗', tag: 'Non-Veg', popular: true },
  { id: 13, category: 'Combos', name: 'Veg Hakka Noodles + Chilli Paneer Gravy', desc: 'A classic pairing — stir-fried veg noodles with rich, tangy chilli paneer gravy', emoji: '🥡', tag: 'Veg', popular: true },
  { id: 14, category: 'Combos', name: 'Veg Fried Rice + Chilli Paneer Gravy', desc: 'Aromatic vegetable fried rice served with flavourful chilli paneer gravy', emoji: '🥡', tag: 'Veg', popular: false },
  { id: 15, category: 'Combos', name: 'Egg Hakka Noodles + Chilli Chicken', desc: 'Egg-enriched noodles paired with crispy, spicy chilli chicken', emoji: '🥡', tag: 'Non-Veg', popular: true },
  { id: 16, category: 'Combos', name: 'Egg Fried Rice + Chilli Chicken', desc: 'Fluffy egg fried rice with succulent chilli chicken, a perfect Indo-Chinese combo', emoji: '🥡', tag: 'Non-Veg', popular: false },
  { id: 17, category: 'Combos', name: 'Egg Fried Rice + Garlic Chicken', desc: 'Egg fried rice paired with aromatic garlic chicken — bold flavours in every bite', emoji: '🥡', tag: 'Non-Veg', popular: false },
  { id: 18, category: 'Combos', name: 'Chicken Fried Rice + Chilli Chicken', desc: 'Double chicken delight — chicken fried rice with spicy chilli chicken on the side', emoji: '🥡', tag: 'Non-Veg', popular: true },
]

const tagColors = {
  Veg: { bg: '#e8f5e9', color: '#2e7d32', dot: '#4caf50' },
  Egg: { bg: '#fff8e1', color: '#f57f17', dot: '#ffc107' },
  'Non-Veg': { bg: '#fce4ec', color: '#b71c1c', dot: '#e53935' },
}

const catEmoji = { All: '🍽️', Snacks: '🍜', Recommended: '⭐', Combos: '🥡' }

export default function Menu() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? menuItems : menuItems.filter(m => m.category === active)

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-tag">Our Menu</span>
          <h2 className="section-title">Dishes Crafted with<br />Love &amp; Tradition</h2>
          <p className="section-desc">
            From hearty thalis to zesty noodles and satisfying combos, our menu is designed to delight every traveller.
            All dishes are freshly prepared and hygienically packed.
          </p>
        </div>

        <div className="menu-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={'menu-tab' + (active === cat ? ' active' : '')}
              onClick={() => setActive(cat)}
            >
              {catEmoji[cat]} {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map(item => {
            const ts = tagColors[item.tag]
            return (
              <div key={item.id} className={'menu-card' + (item.popular ? ' popular' : '')}>
                {item.popular && <div className="popular-badge">⭐ Popular</div>}
                <div className="menu-card-emoji">{item.emoji}</div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <h4>{item.name}</h4>
                    <span className="diet-tag" style={{ background: ts.bg, color: ts.color }}>
                      <span className="diet-dot" style={{ background: ts.dot }} />
                      {item.tag}
                    </span>
                  </div>
                  <p>{item.desc}</p>
                  <div className="menu-card-footer">
                    <span className="menu-category-label">{item.category}</span>
                    <a href="tel:9046783452" className="order-link">Order →</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="menu-cta">
          <div className="menu-cta-inner">
            <div>
              <h3>Ready to Order?</h3>
              <p>Call us with your PNR number or use the IRCTC app to place your order</p>
            </div>
            <div className="menu-cta-btns">
              <a href="tel:9046783452" className="cta-btn-primary">📞 9046783452</a>
              <a href="tel:9339584914" className="cta-btn-outline">📞 9339584914</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
