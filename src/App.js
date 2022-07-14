// src/App.js
import "./App.css";
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails"
import CountriesList from "./components/CountriesList";
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [countryListFromApi, setCountryListFromApi ] = useState([])
  useEffect (() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries`)
      .then(res => {
        setCountryListFromApi(res.data)
       

      })
     
  }, [])
  return(

<div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<CountriesList countries={countryListFromApi} />} />
    <Route path="/countries/:countries_id" element={<CountryDetails countries={countryListFromApi} />} />
    </Routes>
  </div>
  ) 
}
export default App;
