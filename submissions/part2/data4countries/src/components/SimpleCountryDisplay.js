import React, { useState } from 'react'
import DetailedCountryDisplay from './DetailedCountryDisplay'

const SimpleCountryDisplay = ({country}) => {
    const [ showDetailed, setShowDetailed ] = useState(false)

    const handleClick = () => {
        setShowDetailed(!showDetailed)
    }

    if (showDetailed) {
        return (
            <>
                <li>
                    {country.name} <button onClick={handleClick}>hide</button>
                </li>
                <DetailedCountryDisplay country={country}/>
            </>
        )

    }

    return (
        <>
            <li>
                {country.name} <button onClick={handleClick}>show</button>
            </li>
        </>
    )
}

export default SimpleCountryDisplay