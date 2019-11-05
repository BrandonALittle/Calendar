import React, { useState, useContext, useEffect } from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Reminder from './Reminder'
import Schedule from './ScheduleContext'

const Day = styled.div`
    padding: 10px;
    border: solid 1px black;
    background-color: ${props => (props.isWeekend ? '#969696' : 'white')};
    border: ${props =>
        props.isToday ? 'solid #56BD2F 2px' : 'solid black 1px'};
    box-shadow: ${props =>
        props.isSelected
            ? '2px 2px 3px #C4962F inset, -2px -2px 3px #C4962F inset'
            : 'none'};
`

const StyledNumber = styled.div`
    color: ${props =>
        !props.isThisMonth ? 'gray' : props.isWeekend ? '#3F2FC4' : 'black'};
`

const CalendarDay = props => {
    const { date, isThisMonth, isWeekend, isSelected, handleSelectDate } = props
    const schedule = useContext(Schedule)
    const [currentWeather, setCurrentWeather] = useState(null)

    const today = isToday(date)
    const dayOfMonth = getDate(date)
    const reminders = schedule.getRemindersForDate(date)

    const sortFunction = (reminderA, reminderB) => {
        return reminderA.timeStamp - reminderB.timeStamp
    }

    return (
        <Day
            isThisMonth={isThisMonth}
            isWeekend={isWeekend}
            isToday={today}
            onClick={() => handleSelectDate(date)}
            isSelected={isSelected}
        >
            <StyledNumber isThisMonth={isThisMonth} isWeekend={isWeekend}>
                {dayOfMonth}
            </StyledNumber>
            <div style={{ overflow: 'scroll', padding: '2px' }}>
                {reminders.sort(sortFunction).map((reminder, index) => (
                    <Reminder key={`${date}-${index}`} reminder={reminder} />
                ))}
            </div>
        </Day>
    )
}

CalendarDay.propTypes = {
    date: PropTypes.date,
    isThisMonth: PropTypes.bool.isRequired,
    isWeekend: PropTypes.bool.isRequired,
    handleSelectDate: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export default CalendarDay
