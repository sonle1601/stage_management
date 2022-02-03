import { useStateValue } from './StateProvider';
import React, { useState } from 'react';
import '../styles/AddApplicationPopUp.scss';

function AddApplicationPopUp() {
  const [applicant, setApplicant] = useState('');
  const [jobName, setJobName] = useState('');
  const [age, setAge] = useState(0);
  const [company, setCompany] = useState('');
  const [state, dispatch] = useStateValue();

  const ids = state.applicationList.map((object) => {
    return object.id;
  });

  const maxId = Math.max(...ids);

  const togglePopup = () => {
    dispatch({
      type: 'TOGGLE_POPUP',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'ADD_APPLICANT',
      applicant: {
        id: maxId + 1,
        applicant: applicant,
        jobName: jobName,
        age: age,
        company: company,
        stage: 1,
      },
    });
    togglePopup();
  };

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={togglePopup}>
          x
        </span>
        <h1>Add new Application</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Applicant:
            <input
              type='text'
              value={applicant}
              onChange={(e) => setApplicant(e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type='number'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label>
            Job Name:
            <input
              type='text'
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </label>

          <label>
            Company:
            <input
              type='text'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default AddApplicationPopUp;
