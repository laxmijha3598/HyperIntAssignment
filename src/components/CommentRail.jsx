import SectionHeader from './SectionHeader'

function CommentRail({ timelineComments }) {
  return (
    <section className="variation-block">
      <SectionHeader label="Variation 3" title="Live Comment Rail" />
      <div className="comment-rail">
        {timelineComments.map((entry) => (
          <article key={entry.user}>
            <small>{entry.time}</small>
            <h3>{entry.user}</h3>
            <p>{entry.comment}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CommentRail
