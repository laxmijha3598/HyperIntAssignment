function HeroSection({ productInfo, trustPills }) {
  return (
    <section className="hero-card">
      <div className="hero-top">
        <p className="badge">{productInfo.badge}</p>
        <p className="stock">{productInfo.stock}</p>
      </div>
      <div className="hero-grid">
        <div className="product-visual">
          <div className="jar">
            <span>{productInfo.brand}</span>
            <strong>{productInfo.variant}</strong>
          </div>
          <p className="visual-caption">{productInfo.caption}</p>
        </div>
        <div className="product-copy">
          <h1>{productInfo.title}</h1>
          <p>{productInfo.description}</p>
          <div className="price-row">
            <strong>{productInfo.price}</strong>
            <span>{productInfo.size}</span>
            <button type="button">Add to Cart</button>
          </div>
          <div className="pill-row">
            {trustPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
