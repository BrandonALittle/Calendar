import React from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'

const Day = styled.div`
    padding: 10px;
    border: solid 1px black;
    background-color: ${props => props.isThisMonth ? "white" : "gray"};
    opacity: 0.5;
`

const CalendarDay = props => {
    const today = isToday(props.date)

    return (
        <Day isThisMonth={props.isThisMonth}>
            {getDate(props.date)}
        </Day>
    )
}

export default CalendarDay
