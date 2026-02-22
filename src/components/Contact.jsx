import './Contact.css'

const contactInfo = [
  { icon: '📞', label: 'Phone', lines: ['9046783452', '9339584914'], links: ['tel:9046783452','tel:9339584914'] },
  { icon: '✉️', label: 'Email', lines: ['traingourmet@gmail.com'], links: ['mailto:traingourmet@gmail.com'] },
  { icon: '📍', label: 'Address', lines: ['House No: 330/260, Ward No: 16', 'Bhagwanpur, Near Panch Sheel Durga Mandir', 'Kharagpur, West Bengal 721301'], links: [] },
  { icon: '🕐', label: 'Hours', lines: ['Open All Days', 'Morning to Late Night'], links: [] },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Get in Touch &amp; Order Now</h2>
          <p className="section-desc">
            Ready to enjoy a delicious meal on your train journey? Reach out to us via phone or email. We are happy to take your order!
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-panel">
            <h3>Contact Information</h3>
            <p>Share your PNR number and desired dishes when you call. We will confirm your order and deliver it fresh to your seat.</p>

            <div className="contact-cards">
              {contactInfo.map(info => (
                <div key={info.label} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.lines.map((line, i) => (
                      info.links[i]
                        ? <a key={i} href={info.links[i]} className="contact-line link">{line}</a>
                        : <span key={i} className="contact-line">{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="how-to-order">
              <h4>How to Order</h4>
              <ol>
                <li><span>1</span> Call us or use the IRCTC food ordering app</li>
                <li><span>2</span> Share your PNR number and train details</li>
                <li><span>3</span> Choose your favourite dishes from our menu</li>
                <li><span>4</span> Sit back and enjoy your meal at your seat!</li>
              </ol>
            </div>
          </div>

          <div className="contact-action-panel">
            <div className="order-card">
              <div className="order-card-top">
                <span className="order-emoji">🚂</span>
                <h3>Order Your Meal</h3>
                <p>Hungry on the train? We have got you covered. Call us now to place your order.</p>
              </div>

              <div className="order-options">
                <div className="order-option">
                  <div className="option-icon">📞</div>
                  <div className="option-info">
                    <div className="option-label">Call Us</div>
                    <div className="option-value">9046783452</div>
                    <div className="option-value">9339584914</div>
                  </div>
                  <a href="tel:9046783452" className="option-btn">Call</a>
                </div>

                <div className="order-divider">or</div>

                <div className="order-option">
                  <div className="option-icon">📱</div>
                  <div className="option-info">
                    <div className="option-label">IRCTC App</div>
                    <div className="option-value">Order via IRCTC food ordering</div>
                  </div>
                  <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="option-btn">Visit</a>
                </div>

                <div className="order-divider">or</div>

                <div className="order-option">
                  <div className="option-icon">✉️</div>
                  <div className="option-info">
                    <div className="option-label">Email Us</div>
                    <div className="option-value">traingourmet@gmail.com</div>
                  </div>
                  <a href="mailto:traingourmet@gmail.com" className="option-btn">Email</a>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-inner">
                <span className="map-icon">📍</span>
                <h4>Kharagpur, West Bengal</h4>
                <p>House No: 330/260, Ward No: 16, Bhagwanpur<br />Near Panch Sheel Durga Mandir, 721301</p>
                <a
                  href="https://maps.google.com/?q=Kharagpur,West+Bengal,721301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
