// initial state with 4 stages, popup not show, array of 5 applications
export const initialState = {
  minStage: 1,
  maxStage: 4,
  popupSeen: false,
  applicationList: [
    {
      id: 1,
      applicant: 'Son Le',
      age: 28,
      jobName: 'Praktikum Frontend Development - TypeScript und React (m/w/d)',
      company: 'Workwise',
      stage: 1,
    },
    {
      id: 2,
      applicant: 'Jonas ',
      age: 20,
      jobName: 'Praktikum Fullstack (m/w/d)',
      company: 'Workwise',
      stage: 2,
    },
    {
      id: 3,
      applicant: 'Timo',
      age: 20,
      jobName: 'Praktikum - Business Development (f/m/d)',
      company: 'bits&birds',
      stage: 3,
    },
    {
      id: 4,
      applicant: 'Anna',
      age: 30,
      jobName:
        'Praktikum - Online Redaktion / Journalismus / Wassersport (m/w/d)',
      company: 'BEYOND Outdoor Media',
      stage: 4,
    },
    {
      id: 5,
      applicant: 'Danna',
      age: 30,
      jobName:
        'Praktikum - Online Redaktion / Journalismus / Wassersport (m/w/d)',
      company: 'BEYOND Outdoor Media',
      stage: 4,
    },
  ],
};

// CHANGE_STAGE: when prevStage or nextStage Button is pressed
// TOGGLE_POPUP: change the state of popup, to show or hide in

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_STAGE':
      return {
        ...state,
        applicationList: action.applicationList,
      };
    case 'TOGGLE_POPUP':
      return { ...state, popupSeen: !state.popupSeen };
    case 'ADD_APPLICANT':
      return {
        ...state,
        applicationList: [...state.applicationList, action.applicant],
      };

    default:
      return state;
  }
}

export default reducer;
