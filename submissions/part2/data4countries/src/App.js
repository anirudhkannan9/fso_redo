import React, { useEffect, useState } from 'react'
import CountryDisplay from './components/CountryDisplay'
import axios from 'axios'

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ countriesToShow, setCountriesToShow ] = useState([])

  const handleSearch = (event) => {
    //console.log(countries.filter(country => country.name.includes(event.target.value)))
    setSearch(event.target.value)
    setCountriesToShow(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        //console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  return (
    <>
    <div>
      <p>find countries 
        <input
          value={search}
          onChange={handleSearch}
        />
      </p>
      <CountryDisplay countriesToShow={countriesToShow}/>
    </div>
   
   
    </>
  )
}

export default App;
