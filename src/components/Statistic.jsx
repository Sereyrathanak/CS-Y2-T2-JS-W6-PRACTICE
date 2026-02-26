function Statistics({ results }) {
  const scores = results.map((result) => result.score);

  const avg = (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="stats">
    <div>
      <span className="p1">Avg: </span>
      <span className="p2"><strong>{avg}</strong></span>

    </div>
    <div>
      <span className="p1">Min: </span>
      <span className="p2"><strong className={min < 50 ? "warning" : ""}>{min}</strong></span>

     </div>
    <div>
      <span className="p1">Max:</span>
      <span className="p2"><strong>{max}</strong></span>

    </div>
    </div>
  );
}

export default Statistics;