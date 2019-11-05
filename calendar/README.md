# Calendar App

This is an app that displays a monthly calendar, with the ability to change months. It displays the current month, allows for the selection of a single day, and allows a user to add reminders with a given date, time, city, and color. Reminders are displayed in order of their time, and with their color as a background. A short word describing the weather in a particular reminder's city is also displayed.

## Getting Started

Be sure to run `npm install` to install all dependencies. To start the web server and view the app, run `npm run start:dev`, which will serve the app from a default port of 3030 (see webpack config). 

### Caveats

The colors are limited in choice, as there was no time to implement a good color picker. For this reason, colors are given symbolic meaning. 

Also, the choices of city when adding a reminder have been limited to a short list. This was done to allow all reminders with a city to check their weather via the openweathermap.org API. There are some complicating factors involved in getting a city's weather from this api, so I went with a short list of cities.

The ability to delete a reminder is half-finished. There is a deleteReminder function in the Schedule Provider, but it has not been tested and is not passed to any other components. 

Styles are not perfect. When the size of the list of reminders in a day exceeds the height of the calendar square, the overflow is not properly handled currently. 

Styled Components were used in most cases, but some Material UI components were used as well, which use a different styling method.

### Date Functions

Date manipulation is achieved via the `date-fns` package. 

### Testing

Testing at this point is limited to one component, with one test. Lack of time influenced this. Tests are written in Jest, with Enzyme.

### Cross-Browser Support

Code is transpiled via Babel and packaged via Webpack.