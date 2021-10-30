export function getAppointmentsForDay(state, day) {

  const filteredAppointments = [];

  // find day object in days using day
  const filteredDay = state.days.filter(dayObj => dayObj.name === day);

  if (filteredDay.length === 0) {
    return [];
  }

  // get the array of appointments id
  const apptIds = filteredDay[0].appointments;

  // get all the appointment objects
  for (let apptId of apptIds) {
    filteredAppointments.push(state.appointments[apptId]);
  }

  return filteredAppointments;
}


export function getInterview(state, interview) {

  if (!interview) {
    return null;
  } 

  const interviewInfo = state.interviewers[interview.interviewer];

  return {
    student: interview.student,
    interviewer: interviewInfo
  }
} 