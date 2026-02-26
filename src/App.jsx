
import Header from "./components/Header";
import Score from "./components/Score";
import { HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header batchName="Batch C2-S1" />

      <main className="scores-container">
        <Score courseName="HTML" courseResults={HTML_RESULTS} />
        <Score courseName="Java" courseResults={JAVA_RESULTS} />
        <Score courseName="Python" courseResults={PYTHON_RESULTS} />
        <Score courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;