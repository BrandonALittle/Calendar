import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const HeaderDiv = styled.div`
grid-area: 'calendar-header';
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #AD3238;
    padding-left: 15px;
    padding-right: 15px;
`

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
    }
`

const CalendarHeader = (props) => {
    const { currentDate, incrementMonth, decrementMonth } = props
    const month = format(currentDate, 'MMMM')
    const year = format(currentDate, 'yyyy')
    return (
        <HeaderDiv>
            <div style={{cursor: 'pointer'}} onClick={props.decrementMonth}><ArrowBackIosIcon /></div>
            <MonthYear>
                <div className={'month'}>{month}</div>
                <div className={'year'}>{year}</div>
            </MonthYear>
            <div style={{cursor: 'pointer'}} onClick={props.incrementMonth}><ArrowForwardIosIcon /></div>
        </HeaderDiv>
    )
}

CalendarHeader.propTypes = {
    currentDate: PropTypes.date,
    incrementMonth: PropTypes.func.isRequired,
    decrementMonth: PropTypes.func.isRequired
}

export default CalendarHeader