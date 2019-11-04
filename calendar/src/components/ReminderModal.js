import React, { Component, useState } from 'react'
import {
    Modal,
    FormControlLabel,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    TextField,
    makeStyles,
} from '@material-ui/core'

import DateFnsUtils from '@date-io/date-fns';
import { parse } from 'date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '5px 5px 5px gray',
        padding: '15px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}))

const ReminderModal = props => {
    const classes = useStyles()
    const colors = ['red', 'yellow', 'blue', 'green']

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [city, setCity] = useState('')
    const [color, setColor] = useState('')
    const [reminderText, setReminderText] = useState('')

    const handleDateChange = date => {
        setSelectedDate(date)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleColorChange = (e) => {
        console.log(color)
        setColor(e.target.value)
    }

    const handleReminderTextChange = (e) => {
        setReminderText(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addReminder(selectedDate, reminderText, city)
    }

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.handleClose}
        >
            <div className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} fullWidth>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Event Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <FormLabel component="legend">Reminder Color</FormLabel>
                        <RadioGroup
                            aria-label="position"
                            name="position"
                            label="Reminder Color"
                            value={color}
                            onChange={handleColorChange}
                            row
                        >
                            {colors.map(color => {
                                return (
                                    <FormControlLabel
                                        value={color}
                                        control={
                                            <Radio style={{ color: color }} />
                                        }
                                        label={color}
                                    />
                                )
                            })}
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <TextField
                            id="reminder"
                            label="Reminder Text (max 80 chars)"
                            margin="normal"
                            fullWidth
                            inputProps={{ maxLength: 80 }}
                            onChange={handleReminderTextChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="city"
                            label="City"
                            margin="normal"
                            fullWidth
                            inputProps={{ maxLength: 25 }}
                            onChange={handleCityChange}
                        />
                    </div>
                    <button type="submit">Add Reminder</button>
                </form>
            </div>
        </Modal>
    )
}

export default ReminderModal
