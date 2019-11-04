import React from 'react'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import styled from 'styled-components'
import CalendarDay from './CalendarDay'

const StyledCalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    height: 100vh;
`

const CalendarGrid = (props) => {

    const getDaysOfMonth = (date) => {
        const firstDayOfMonth = startOfMonth(date)
        const lastDayOfMonth = endOfMonth(date)
        const firstSunday = startOfWeek(firstDayOfMonth)
        const lastSaturday = endOfWeek(lastDayOfMonth)
        const interval = {
            start: firstSunday,
            end: lastSaturday
        }

        return eachDayOfInterval(interval)
    }

    return (
        // <WeeksBar />
        <StyledCalendarGrid>
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
                })
            }
        </StyledCalendarGrid>
    )
}

export default CalendarGrid