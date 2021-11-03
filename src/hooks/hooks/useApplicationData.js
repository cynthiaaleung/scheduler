import  { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
    .then((all) => {
      setState(prev => ({
        ...prev, 
        days: all[0].data, 
        appointments: all[1].data, 
        interviewers: all[2].data 
      }));
    })
    .catch(error => {
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.response.data);
    });
    
  }, [])

  function updateSpots(state, appointments, id) {

    const index = state.days.findIndex(d => d.name === state.day);
    const day = state.days[index];

    let spots = 0;

    for (const id of day.appointments) {
      const appointment = appointments[id];

      if (!appointment.interview) {
        spots++;
      }
    }

    const newDay = {...day, spots};
    const newDays = state.days.map(d => d.name === state.day ? newDay : d);

    return newDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview})
      .then((res) => {
        const days = updateSpots(state, appointments, id);

        setState({
          ...state, 
          appointments,
          days
        })
        return res;
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then((res) => {
        const days = updateSpots(state, appointments, id);

        setState({
          ...state, 
          appointments,
          days
        })
        return res;
      })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}