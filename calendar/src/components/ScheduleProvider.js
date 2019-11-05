import React, { Component } from 'react'
import Schedule from './ScheduleContext'
import { format } from 'date-fns'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ReminderModal from './ReminderModal'

export default class ScheduleProvider extends Component {
    state = {
        reminders: new Map(),
        modalIsOpen: false,
    }

    transformDateToIndex = date => {
        return format(date, 'yyyy MMMM d')
    }

    addReminder = (date, reminderText, reminderCity, color) => {
        const index = this.transformDateToIndex(date)
        this.setState({
            reminders: this.state.reminders.set(index, [
                ...this.getRemindersForDate(date),
                {
                    timeStamp: date,
                    text: reminderText,
                    city: reminderCity,
                    color: color,
                },
            ]),
        })
        this.handleModalClose()
    }

    getRemindersForDate = date => {
        const index = this.transformDateToIndex(date)
        return this.state.reminders.get(index) || []
    }

    deleteReminder = (date, reminderText) => {
        const index = this.transformDateToIndex(date)
        const filteredRemindersForDate = this.getRemindersForDate(date).filter(
            reminder => !reminder.reminderText,
        )
        const modifiedReminders = this.state.reminders.set(
            index,
            filteredRemindersForDate,
        )
        this.setState({ reminders: modifiedReminders })
    }

    handleModalOpen = () => {
        this.setState({
            modalIsOpen: true,
        })
    }

    handleModalClose = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    render() {
        return (
            <Schedule.Provider
                value={{
                    getRemindersForDate: this.getRemindersForDate,
                    addReminder: this.addReminder,
                    deleteReminder: this.deleteReminder,
                }}
            >
                <ReminderModal
                    open={this.state.modalIsOpen}
                    handleClose={this.handleModalClose}
                    addReminder={this.addReminder}
                />
                {this.props.children}
                <Fab
                    style={{ position: 'fixed', bottom: '5%', right: '5%' }}
                    onClick={this.handleModalOpen}
                >
                    <AddIcon />
                </Fab>
            </Schedule.Provider>
        )
    }
}
