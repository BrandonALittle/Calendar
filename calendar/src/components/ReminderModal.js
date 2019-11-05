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
    Button,
    Select,
    MenuItem,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { parse } from 'date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers'
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
    const colors = ['#56BD2F', '#C4962F', '#AD3238', '#3F2FC4', '#2DBA93']
    const colorNames = ['Optional', 'Work', 'Important!', 'Family', 'Friend']

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [city, setCity] = useState('')
    const [color, setColor] = useState('')
    const [reminderText, setReminderText] = useState('')

    const handleDateChange = date => {
        setSelectedDate(date)
    }

    const handleCityChange = e => {
        setCity(e.target.value)
    }

    const handleColorChange = e => {
        setColor(e.target.value)
    }

    const handleReminderTextChange = e => {
        setReminderText(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.addReminder(selectedDate, reminderText, city, color)
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
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Event Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <RadioGroup
                            aria-label="position"
                            name="position"
                            label="Reminder Color"
                            value={color}
                            onChange={handleColorChange}
                            row
                        >
                            {colors.map((color, index) => {
                                return (
                                    <FormControlLabel
                                        key={`${color}-${index}`}
                                        value={color}
                                        control={
                                            <Radio style={{ color: color }} />
                                        }
                                        label={colorNames[index]}
                                    />
                                )
                            })}
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <TextField
                            id="reminder"
                            label="Reminder Text (max 30 chars)"
                            margin="normal"
                            fullWidth
                            inputProps={{ maxLength: 30 }}
                            onChange={handleReminderTextChange}
                        />
                    </div>
                    <div>
                        <FormLabel id="city-label">City:</FormLabel>
                        <Select
                            labelId="city-label"
                            label="City"
                            onChange={handleCityChange}
                            fullWidth
                        >
                            <MenuItem value={'Bogota'}>Bogota</MenuItem>
                            <MenuItem value={'Medellin'}>Medellin</MenuItem>
                            <MenuItem value={'Armenia'}>Armenia</MenuItem>
                            <MenuItem value={'Pereira'}>
                                Pereira
                            </MenuItem>
                            <MenuItem value={'Manizales'}>Manizales</MenuItem>
                            <MenuItem value={'Cali'}>Cali</MenuItem>
                            <MenuItem value={'Cartagena'}>Cartagena</MenuItem>
                            <MenuItem value={'Bucaramanga'}>
                                Bucaramanga
                            </MenuItem>
                            <MenuItem value={'Salento'}>Salento</MenuItem>
                            <MenuItem value={'Rio Negro'}>Rio Negro</MenuItem>
                            <MenuItem value={'Providencia'}>Providencia</MenuItem>
                        </Select>
                    </div>
                    <Button variant="outlined" type="submit">
                        Add Reminder
                    </Button>
                </form>
            </div>
        </Modal>
    )
}

ReminderModal.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    addReminder: PropTypes.func.isRequired,
}

export default ReminderModal
