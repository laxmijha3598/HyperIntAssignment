function CounterStrip({ counterItems }) {
  return (
    <section className="counter-strip" aria-label="Live social counters">
      {counterItems.map((item) => (
        <article key={item.label} className="counter-card">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </article>
      ))}
    </section>
  )
}

export default CounterStrip
