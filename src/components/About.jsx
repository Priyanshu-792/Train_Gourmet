import './About.css'

const features = [
  {
    icon: '🧼',
    title: 'Strict Hygiene Standards',
    desc: 'Meticulous attention to cleanliness and secure packaging. Every meal is prepared in a sanitised kitchen and packed hygienically for safe delivery.',
  },
  {
    icon: '🌿',
    title: 'Fresh Quality Ingredients',
    desc: 'We use only fresh, locally sourced ingredients. Both vegetarian and non-vegetarian specialties are crafted with premium produce and authentic spices.',
  },
  {
    icon: '💰',
    title: 'Budget-Friendly Meals',
    desc: 'Delicious food should not break the bank. We offer generous portions at affordable prices, perfect for families and solo travellers alike.',
  },
  {
    icon: '🚀',
    title: 'Reliable & Timely Delivery',
    desc: 'From the moment you order to the moment your food arrives at your seat, we ensure a seamless and punctual delivery experience.',
  },
  {
    icon: '📋',
    title: 'Diverse Menu',
    desc: 'Our extensive menu caters to varied tastes — from traditional Indian thalis and noodles to combos and snacks, there is something for everyone.',
  },
  {
    icon: '💡',
    title: 'Easy Ordering',
    desc: 'Simply call us with your PNR number or place your order via the IRCTC app. We make ordering as effortless as possible for your convenience.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">We Are All About Tasty &amp;<br />Clean Eats, Just a Click Away</h2>
          <p className="section-desc">
            Train Gourmet blends tradition with innovation to bring you restaurant-quality meals wherever your journey takes you. We believe every traveller deserves a delicious, hygienic meal, and we are here to deliver exactly that.
          </p>
        </div>

        <div className="about-highlight">
          <div className="highlight-item">
            <div className="highlight-icon">🍽️</div>
            <div>
              <h3>Dine-In Quality, Delivered to You</h3>
              <p>Experience the flavours of a restaurant right at your train seat — hot, fresh, and perfectly packed.</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🤝</div>
            <div>
              <h3>Building Customer Trust</h3>
              <p>Your satisfaction is our priority. We go above and beyond to ensure every order meets our high standards of quality and hygiene.</p>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
