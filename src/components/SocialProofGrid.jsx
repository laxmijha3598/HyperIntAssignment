import SectionHeader from './SectionHeader'

function SocialProofGrid({ featuredReviews }) {
  return (
    <section className="variation-block">
      <SectionHeader label="Variation 1" title="Social Proof Grid" />
      <div className="review-grid">
        {featuredReviews.map((review) => (
          <article key={review.user} className="review-card">
            <p className="score">
              {'★'.repeat(review.score)}
              {'☆'.repeat(5 - review.score)}
            </p>
            <h3>{review.title}</h3>
            <p>{review.text}</p>
            <div className="review-foot">
              <strong>{review.user}</strong>
              <span>{review.proof}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SocialProofGrid
