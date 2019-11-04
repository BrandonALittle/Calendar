import React, { useContext } from 'react'
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
} from 'date-fns'
import styled from 'styled-components'
import CalendarDay from './CalendarDay'

const StyledCalendarGrid = styled.div`
    grid-area: "calendar-grid";
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 30px repeat(5, 1fr);
    @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        > p {
            display: none;
        }
    }
`

const StyledWeekday = styled.p`
    margin: 5px 0;
    text-align: center;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
`

const WeeksBar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days.map(day => <StyledWeekday>{day}</StyledWeekday>)
}

const CalendarGrid = props => {
    const getDaysOfMonth = date => {
        const firstDayOfMonth = startOfMonth(date)
        const lastDayOfMonth = endOfMonth(date)
        const firstSunday = startOfWeek(firstDayOfMonth)
        const lastSaturday = endOfWeek(lastDayOfMonth)
        const interval = {
            start: firstSunday,
            end: lastSaturday,
        }

        return eachDayOfInterval(interval)
    }

    return (
        <StyledCalendarGrid>
            <WeeksBar className="weekday-names" />
            {getDaysOfMonth(props.currentDate).map(day => {
                return (
                    <CalendarDay
                        date={day}
                        key={day}
                        isThisMonth={isSameMonth(props.currentDate, day)}
                        handleSelectDate={props.handleSelectDate}
                        isSelected={isSameDay(props.selectedDate, day)}
                    />
                )
            })}
        </StyledCalendarGrid>
    )
}

export default CalendarGrid
