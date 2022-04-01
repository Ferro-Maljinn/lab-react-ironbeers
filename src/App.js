import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path={"/beers"} element={<AllBeers />} />
        <Route path={"/randomBeer"} element={<RandomBeer />} />
        <Route path={"/newBeer"} element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
