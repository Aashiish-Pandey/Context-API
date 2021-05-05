import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ul>
        <MovieList/>
      </ul>
    </div>
  );
}

export default App;
