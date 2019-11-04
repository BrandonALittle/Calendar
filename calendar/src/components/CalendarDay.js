import React, { useState, useContext, useEffect } from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'
import Reminder from './Reminder'
import Schedule from './ScheduleContext'

const Day = styled.div`
    padding: 10px;
    border: solid 1px black;
    background-color: ${props => (props.isThisMonth ? 'white' : 'gray')};
    opacity: ${props => (props.isThisMonth ? '1' : '0.5')};
    border: ${props =>
        props.isToday ? 'solid #56BD2F 2px' : 'solid gray 1px'};
    box-shadow: ${props =>
        props.isSelected
            ? '2px 2px 3px #C4962F inset, -2px -2px 3px #C4962F inset'
            : 'none'};
`

const CalendarDay = props => {
    const { date, isThisMonth, isSelected, handleSelectDate } = props
    const schedule = useContext(Schedule)
    const [currentWeather, setCurrentWeather] = useState(null)

    const today = isToday(date)
    const dayOfMonth = getDate(date)
    const reminders = schedule.getRemindersForDate(date)

    // useEffect(() => {

    // })

    return (
        <Day
            isThisMonth={isThisMonth}
            isToday={today}
            onClick={() => handleSelectDate(date)}
            isSelected={isSelected}
        >
            {dayOfMonth}
            <div style={{ overflow: 'scroll', padding: '2px' }}>
                {reminders.map((reminder, index) => (
                    <Reminder key={`${date}-${index}`} reminder={reminder} />
                ))}
            </div>
        </Day>
    )
}

export default CalendarDay
