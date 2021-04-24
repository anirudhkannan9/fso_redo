import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Weather = ({country}) => {
    const [ weather, setWeather ] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    const params = {
        access_key: api_key,
        query: country.capital
    }


    useEffect(() => {
        //get weather data w/ axios get to weatherstack api
        axios
            .get('http://api.weatherstack.com/current', { params })
            .then(
                response => {
                    console.log(response.data.current)
                    setWeather(response.data.current)

                }
            )
        //console.log(response.data)
        //deconstruct and/or setState to trigger re-render with weather

    }, [])

    return (
        <>
        {console.log(weather)}
            <h3>Weather in {country.capital}</h3>
            <div><strong>temperature: </strong> {weather['temperature']} ℃</div>
            <div><img 
            src={weather['weather_icons']}
            style={{ width: 100 }}
            alt={`img of ${weather['weather_descriptions']} weather conditions`}
            />
            </div>
            <div><strong>wind: </strong> {weather['wind_speed']} mph direction {weather['wind_dir']}</div>

        </>

    )
} 

export default Weather