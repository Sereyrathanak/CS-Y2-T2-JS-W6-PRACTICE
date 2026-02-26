
import Header from "./components/Header";
import Score from "./components/Score";
import { HTML_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Batch C2-S1" />

      <main className="scores-container">
        <Score courseName="HTML" courseResults={HTML_RESULTS} />
      </main>
    </>
  );
}

export default App;