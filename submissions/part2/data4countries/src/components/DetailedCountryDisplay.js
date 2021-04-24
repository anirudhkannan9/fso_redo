import React from 'react'
import Weather from './Weather'

const DetailedCountryDisplay = ({country}) => {

    return(
        <>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} height='100' width='150' alt='flag'/>
            <Weather country={country}/>
        </>
    )
}

export default DetailedCountryDisplay