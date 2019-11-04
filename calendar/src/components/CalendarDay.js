import React from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'

const Day = styled.div`
    padding: 10px;
    border: solid 1px black;
    background-color: ${props => props.isThisMonth ? "white" : "gray"};
    opacity: 0.5;
    border: ${props => props.isToday ? "solid green 2px" : "none"};
    box-shadow: ${props => props.isSelected? '2px 2px 3px black inset, -2px -2px 3px black inset' : 'none'};
`

const CalendarDay = props => {
    const today = isToday(props.date)

    return (
        <Day 
            isThisMonth={props.isThisMonth} 
            isToday={today} 
            onClick={() => props.handleSelectDate(props.date)}
            isSelected={props.isSelected}
        >
            {getDate(props.date)}
        </Day>
    )
}

export default CalendarDay
