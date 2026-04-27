import SectionHeader from './SectionHeader'

function MediaMomentum({ mediaMoments }) {
  return (
    <section className="variation-block alt-tone">
      <SectionHeader label="Variation 2" title="Media + Review Momentum" />
      <div className="media-layout">
        <aside>
          <h3>Trending this week</h3>
          {mediaMoments.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </aside>
        <article className="spotlight-review">
          <span>Creator highlight</span>
          <h3>"This is dessert energy without dessert crash."</h3>
          <p>
            Taste-led social proof block that blends editorial content with customer language. This pattern helps users
            process trust quickly while still feeling native to a product page.
          </p>
          <button type="button">Read 3000+ customer reviews</button>
        </article>
      </div>
    </section>
  )
}

export default MediaMomentum
