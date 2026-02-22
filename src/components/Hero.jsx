import './Hero.css'

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg-overlay" />

      <div className="hero-particles">
        {['🍛','🍜','🥘','🍱','🥗','🍲'].map((emoji, i) => (
          <span key={i} className="particle" style={{ '--delay': `${i * 0.8}s`, '--x': `${10 + i * 14}%` }}>
            {emoji}
          </span>
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span>🚂</span> Train Food Delivery Service
        </div>
        <h1 className="hero-title">
          Flavour at<br />
          <span className="hero-highlight">Your Seat!</span>
        </h1>
        <p className="hero-subtitle">
          Fresh, hygienic & delicious restaurant-quality meals delivered right to your train seat.
          Order via phone call or IRCTC app using your PNR number.
        </p>

        <div className="hero-steps">
          <div className="step">
            <span className="step-num">1</span>
            <span>Share your PNR</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-num">2</span>
            <span>Choose your meal</span>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <span className="step-num">3</span>
            <span>Enjoy at your seat</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="tel:9046783452" className="btn-hero-primary">
            📞 Call to Order
          </a>
          <button className="btn-hero-outline" onClick={() => handleScroll('#menu')}>
            View Menu ↓
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Menu Items</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Hygienic</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">All Days</span>
            <span className="stat-label">Open</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <button onClick={() => handleScroll('#about')}>
          <span className="scroll-arrow" />
        </button>
      </div>
    </section>
  )
}
