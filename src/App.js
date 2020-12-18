import './App.css';
import {useState } from "react"
import Header from "./components/Header/Header"
import Nav from "./components/Navigation/Nav"
import MovieContainer from "./components/MovieContainer/MovieContainer"
import request from "./components/request"

function App() {
  const [selectedOption,setSelectedOption]=useState(request.fetchTrending)
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <MovieContainer selectedOption={selectedOption}  />
    </div>
  );
}

export default App;
