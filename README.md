# Interview Scheduler
## Project Description

Interview Scheduler is a single-page application where students can view, create, edit, and delete appointments with interviewers. The spots remaining for each corresponding day will update as students create or delete their appointments. 

## Tech Stack

React, HTML, SASS, Node.js, Express.js, Axios, PostgreSQL, Cypress, Storybook, Jest, Webpack Dev Server

## Dependencies

- Axios
- Classnames
- Normalize.css
- React-dom
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Client Server
- Fork and clone this repository
- Install dependencies with `npm install`

## API Server
The client and API server needs to run concurrently while using PostgreSQL database to persist the data.

- Fork and clone the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps in the scheduler-api README file to set up the database
- Run `npm start` at the root directory of the project


## Final Product
### Daily View
This page shows all the appointments for Monday. There are currently 3 available slots.
!["All appointments for the selected day"](https://github.com/cynthiaaleung/scheduler/blob/master/docs/appointments-view.png?raw=true)

### Creating an Appointment
By clicking one of the available slots, students can create a new appointment and choose an interviewer.
!["Adding an appointment"](https://github.com/cynthiaaleung/scheduler/blob/master/docs/add-appointment.png?raw=true)

### Deleting an Appointment
Students can click any existing appointment to edit or delete it and a message will be prompted to confirm the action.
!["Deleting an appointment"](https://github.com/cynthiaaleung/scheduler/blob/master/docs/deleting-appointment.png?raw=true)