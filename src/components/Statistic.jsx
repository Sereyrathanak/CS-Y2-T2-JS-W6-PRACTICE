function Statistics({ results }) {
  const scores = results.map((result) => result.score);

  const avg = (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="stats">
      <span>Avg: <strong>{avg}</strong></span>
      <span>Min: <strong className={min < 50 ? "warning" : ""}>{min}</strong></span>
      <span>Max: <strong>{max}</strong></span>
    </div>
  );
}

export default Statistics;