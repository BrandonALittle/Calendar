import React from 'react'
import { isToday, getDate } from 'date-fns'
import styled from 'styled-components'

const Day = styled.div`
    padding: 10px;
    border: solid 1px gray;
`

const CalendarDay = props => {
    const today = isToday(props.date)

    return (
        <Day>
            {getDate(props.date)}
        </Day>
    )
}

export default CalendarDay
