import GetFilmData from "./getAPI"
import ErrorBoundary from "./errorBoundary";

function App() {
  document.body.style.backgroundColor = 'black';
  document.body.style.margin = '0';

  return (
    <ErrorBoundary>
      <GetFilmData />
    </ErrorBoundary>
  )
}

export default App
