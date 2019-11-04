import React, { Component } from 'react'
import { format, addMonths, subMonths } from 'date-fns'
import styled from 'styled-components'
import ScheduleProvider from './ScheduleProvider'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'

const CalendarLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 9fr;
    grid-template-areas: 
        "calendar-header"
        "calendar-grid";
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
                <CalendarLayout style={{ width: '100vw' }}>
                    <CalendarHeader
                        currentDate={this.state.currentDate}
                        incrementMonth={this.incrementMonth}
                        decrementMonth={this.decrementMonth}
                    />
                    <CalendarGrid
                        currentDate={this.state.currentDate}
                        selectedDate={this.state.selectedDate}
                        handleSelectDate={this.handleSelectDate}
                    />
                </CalendarLayout>
            </ScheduleProvider>
        )
    }
}
