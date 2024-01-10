export const formBasic = [
  {
    label: "First Name",
    name:'fname',
    placeholder: " Prdaeep",
    type: "text",

  },
  {
    label: "Last Name",
    name:'lName',
    placeholder: "Chauhan",
    type: "text",
  },
  {
    label: "Email Address",
    name:'email',
    placeholder: "example@gmial.com",
    type: "email",
  },
];

export const meetingType = [
  "Hosting Meeting MySelf",
  "with a small team (2-10) users",
  "with a larger team (11+) users",
  "accross department and multiple teams (50+) users",
  "I'm not sure yet",
];

export const selectOption = [
  {
    label: "HOW DO YOU PLAN ON USING CALENDAR",
    name:'select',
    meetingType: meetingType,
  },
];

export const textArea = [
  {
    name:'textarea',
    label: "How can we help?. (optional)",
    placeholder:'Enter a description...'
  },
]; 
export const details=[
  {
    name:"city",
    label: "City",
    placeholder:'Enter Your City',
    type: "text",
  },
  {
    name:"event",
    label: "Event",
    placeholder:'Events Name',
    type: "text",
  },
  {
    name:"checkIn",
    label: "Check In",
    placeholder:'Check In Time',
    type: "text",
  },
  {
    name:"checkOut",
    label: "Check Out",
    placeholder:'Check Out Time',
    type: "text",
  },

]
