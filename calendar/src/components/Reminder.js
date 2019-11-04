import React from 'react'
import { format } from 'date-fns'

const Reminder = props => {
    const { reminder } = props
    const time = format(reminder.timeStamp, "h':'mm")

    return (
        <div>
            <h4>{time}</h4>
            <p>{reminder.text}</p>
            <p>{reminder.city}</p>
        </div>
    )
}

export default Reminder
