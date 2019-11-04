import React, { useContext } from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'
import Reminder from './Reminder'
import Schedule from './ScheduleContext'

const Day = styled.div`
    padding: 10px;
    border: solid 1px black;
    background-color: ${props => (props.isThisMonth ? 'white' : 'gray')};
    opacity: 0.5;
    border: ${props => (props.isToday ? 'solid green 2px' : 'none')};
    box-shadow: ${props =>
        props.isSelected
            ? '2px 2px 3px black inset, -2px -2px 3px black inset'
            : 'none'};
    overflow: scroll;
`

const CalendarDay = props => {
    const schedule = useContext(Schedule)
    const { date, isThisMonth, isSelected, handleSelectDate } = props
    const today = isToday(date)
    const dayOfMonth = getDate(date)
    const reminders = schedule.getRemindersForDate(date)

    return (
        <Day
            isThisMonth={isThisMonth}
            isToday={today}
            onClick={() => handleSelectDate(date)}
            isSelected={isSelected}
        >
            {dayOfMonth}
            {reminders.map(reminder => (
                <Reminder reminder={reminder} />
            ))}
        </Day>
    )
}

export default CalendarDay
