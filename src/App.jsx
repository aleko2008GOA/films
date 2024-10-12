import GetFilmData from "./getAPI"
import ErrorBoundary from "./errorBoundary";

function App() {
  document.body.style.backgroundColor = 'black';
  document.body.style.margin = '0';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';

  return (
    <ErrorBoundary>
      <GetFilmData />
    </ErrorBoundary>
  )
}

export default App
