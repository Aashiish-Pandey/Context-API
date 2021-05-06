import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import {MYContextProvider} from './MyContext'
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <MYContextProvider>
      <div className="App">
      <AddMovie/>
      <Nav />
      <MovieList />
    </div>
    </MYContextProvider>
    </MovieProvider>
  );
}

export default App;
