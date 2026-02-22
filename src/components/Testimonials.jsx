import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    route: 'Mumbai - Kolkata Express',
    rating: 5,
    text: 'Absolutely loved the Shahi Kadai Chicken Thali! It arrived hot, well-packed, and tasted just like a proper restaurant meal. Will definitely order again on my next trip.',
    emoji: '👩',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    route: 'Delhi - Chennai Mail',
    rating: 5,
    text: 'The Chilli Chicken was phenomenal! Great flavour and portion size. Ordering was super easy — just shared my PNR and the food arrived right on time at my seat.',
    emoji: '👨',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    route: 'Howrah - Bangalore Express',
    rating: 5,
    text: 'The Veg Combo (Hakka Noodles + Chilli Paneer Gravy) was delicious and very filling. Hygienic packaging and timely delivery. Highly recommend Train Gourmet!',
    emoji: '👩',
  },
  {
    id: 4,
    name: 'Mohammed Siddiqui',
    route: 'Kharagpur - Pune Duranto',
    rating: 5,
    text: 'Best train food experience ever! The Shahi King Thali was a royal treat — loved every item in it. Affordable price for such quality food. Impressed!',
    emoji: '👨',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="test-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">Real reviews from real train travellers. We are proud to serve delicious meals that make every journey memorable.</p>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={'test-card' + (i === active ? ' active' : '')}
              onClick={() => setActive(i)}
            >
              <div className="test-stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="test-text">&ldquo;{t.text}&rdquo;</p>
              <div className="test-author">
                <div className="test-avatar">{t.emoji}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-route">🚂 {t.route}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="test-summary">
          <div className="summary-item">
            <span className="summary-stars">★★★★★</span>
            <span className="summary-score">4.9 / 5</span>
            <span className="summary-label">Average Rating</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-item">
            <span className="summary-num">500+</span>
            <span className="summary-label">Happy Customers</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-item">
            <span className="summary-num">100%</span>
            <span className="summary-label">Delivery Success</span>
          </div>
        </div>
      </div>
    </section>
  )
}
