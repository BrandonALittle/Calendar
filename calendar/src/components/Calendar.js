import React, { Component } from 'react'
import { format, addMonths, subMonths } from 'date-fns'
import styled from 'styled-components'
import ScheduleProvider from './ScheduleProvider'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'

const HeaderDiv = styled.div`
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
            currentDate: addMonths(this.state.currentDate, 1),
        })
    }

    decrementMonth = () => {
        this.setState({
            currentDate: subMonths(this.state.currentDate, 1),
        })
    }

    handleSelectDate = date => {
        this.setState({
            selectedDate: date,
        })
    }

    render() {
        return (
            <ScheduleProvider>
                <div style={{width: '100vw'}}>
                    <HeaderDiv>
                        <CalendarHeader
                            currentDate={this.state.currentDate}
                            incrementMonth={this.incrementMonth}
                            decrementMonth={this.decrementMonth}
                        />
                    </HeaderDiv>
                    <CalendarGrid
                        currentDate={this.state.currentDate}
                        selectedDate={this.state.selectedDate}
                        handleSelectDate={this.handleSelectDate}
                    />
                </div>
            </ScheduleProvider>
        )
    }
}
