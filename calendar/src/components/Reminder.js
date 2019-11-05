import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledReminder = styled.div`
    margin-bottom: 5px;
    background-color: ${props => props.color || 'light-gray'};
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Roboto;
    position: relative;
    border-radius: 2px;
    box-shadow: 1px 1px 2px gray, -1px -1px 2px gray;
`

const StyledTime = styled.div`
    font-weight: bold;
    writing-mode: vertical-lr;
    padding: 2px;
    background-color: white;
`

const StyledText = styled.p`
    padding-left: 5px;
    margin: 0px;
`

const StyledCity = styled.div`
    margin: 0;
    padding: 5px;
    text-decoration: underline;
    font-size: 0.8em;
`

const StyledWeather = styled.div`
    font-size: 0.8em;
    padding: 5px;
`

const cityToId = {
    'Bogota': 3688689,
    'Medellin': 3674962,
    'Armenia': 3689559,
    'Pereira': 3672486,
    'Manizales': 3675443,
    'Cali': 3687925,
    'Cartagena': 3687238,
    'Bucaramanga': 3688465,
    'Salento': 3670352,
    'Rio Negro': 3670730,
    'Providencia': 3670205,
}

const Reminder = props => {
    const [cityWeather, setCityWeather] = useState('')
    const { reminder } = props
    const time = format(reminder.timeStamp, "h':'mm")
    const cityId = cityToId[reminder.city]

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=26255e38c0e92d20d68c51b12fd8be09`)
        .then(res => res.json())
        .then(data => setCityWeather(data.weather[0].main))
    })

    return (
        <StyledReminder color={reminder.color}>
            <div>
                <StyledText>{reminder.text}</StyledText>
                <StyledCity>{reminder.city}</StyledCity>
                <StyledWeather>Weather: {cityWeather}</StyledWeather>
            </div>
            <StyledTime>{time}</StyledTime>
        </StyledReminder>
    )
}

Reminder.propTypes = {
    key: PropTypes.string,
    reminder: PropTypes.object,
}

export default Reminder
