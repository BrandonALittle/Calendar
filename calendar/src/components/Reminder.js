import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'

const StyledReminder = styled.div`
    margin-bottom: 5px;
    background-color: ${props => props.color || 'light-gray'};
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Roboto;
    position: relative;
    border-radius: 2px;
    box-shadow: 1px 1px 2px gray, -1px -1px 2px gray;
`

const StyledTime = styled.div`
    font-weight: bold;
    writing-mode: vertical-lr;
    padding: 2px;
    background-color: white;
`

const StyledText = styled.p`
    padding-left: 5px;
    margin: 0px;
`

const StyledCity = styled.div`
    margin: 0;
    padding: 5px;
    text-decoration: underline;
`

const Reminder = props => {
    const { reminder } = props
    const time = format(reminder.timeStamp, "h':'mm")

    return (
        <StyledReminder color={reminder.color}>
            <div>
                <StyledText>{reminder.text}</StyledText>
                <StyledCity>{reminder.city}</StyledCity>
            </div>
            <StyledTime>{time}</StyledTime>
        </StyledReminder>
    )
}

export default Reminder
