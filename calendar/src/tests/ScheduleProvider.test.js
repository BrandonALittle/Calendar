import React from 'react'
import { shallow } from 'enzyme'
import { format } from 'date-fns'
import ScheduleProvider from '../components/ScheduleProvider'

describe('ScheduleProvider', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<ScheduleProvider />)
    })

    it('should allow for adding a new reminder to the reminders list', () => {
        const instance = wrapper.instance()
        const date = new Date()
        const index = format(date, 'yyyy MMMM d')
        
        instance.addReminder(date, 'Go to School', 'Medellin', 'red')

        const value = wrapper.state('reminders').get(index)[0]
        const text = value.text
        const city = value.city
        const color = value.color
        expect(text).toBe('Go to School')
        expect(city).toBe('Medellin')
        expect(color).toBe('red')
    })
})
