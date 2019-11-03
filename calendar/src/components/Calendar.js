import React, { Component } from 'react'
import { format, addMonths, subMonths } from 'date-fns'
import styled from 'styled-components'
import CalendarHeader from './CalendarHeader'

const CalendarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    padding-left: 15px;
    padding-right: 15px;
`

export default class Calendar extends Component {
    state = {
        currentDate: new Date(),
        selectedDate: new Date(),
    }

    incrementMonth = () => {
        this.setState({
            currentMonth: addMonths(this.state.currentDate, 1),
        })
    }

    decrementMonth = () => {
        this.setState({
            currentMonth: subMonths(this.state.currentDate, 1),
        })
    }

    render() {
        return (
            <div>
                <CalendarDiv>
                    <CalendarHeader currentDate={this.state.currentDate} />
                </CalendarDiv>
            </div>
        )
    }
}
