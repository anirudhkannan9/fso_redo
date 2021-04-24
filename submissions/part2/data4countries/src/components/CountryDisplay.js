import React from 'react'
import DetailedCountryDisplay from './DetailedCountryDisplay'

const CountryDisplay = ({countriesToShow}) => {
    if (countriesToShow.length === 1) {
        return (
            <DetailedCountryDisplay country={countriesToShow[0]}/>
   
        )
    } else if (countriesToShow.length <= 10) {
        return (
            
                <div>{countriesToShow.map(country => <li key={country.name}>{country.name}</li>)}</div>
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

}

export default CountryDisplay