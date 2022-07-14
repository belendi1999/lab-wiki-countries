// src/App.js
import "./App.css";
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails"
import CountriesList from "./components/CountriesList";
import countriesData from "./countries.json"

function App() {
  return(
<div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<CountriesList countries={countriesData} />} />
    <Route path="/countries/:countries_id" element={<CountryDetails countries={countriesData} />} />
    </Routes>
  </div>
  ) 
}
export default App;
