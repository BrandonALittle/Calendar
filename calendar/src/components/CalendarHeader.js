import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'

const MonthYear = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & .month {
        font-size: 1.9em;
        margin: 0;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    & .year {
        position: absolute;
        opacity: 0.2;
        font-size: 5em;
        letter-spacing: 1em;
        text-indent: 1em;
    }
`

const CalendarHeader = (props) => {
    const month = format(props.currentDate, 'MMMM')
    const year = format(props.currentDate, 'yyyy')
    return (
        <>
            <div onClick={props.decrementMonth}>{'<---'}</div>
            <MonthYear>
                <div className={'month'}>{month}</div>
                <div className={'year'}>{year}</div>
            </MonthYear>
            <div onClick={props.incrementMonth}>{'-->'}</div>
        </>
    )
}

export default CalendarHeader