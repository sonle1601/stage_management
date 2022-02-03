import React from 'react';
import '../styles/Application.scss';
import { useStateValue } from './StateProvider';

function Application({ applicant, jobName, company, stage, id }) {
  const [state, dispatch] = useStateValue();

  const prevStage = () => {
    const newApplicationList = state.applicationList.map((application) =>
      application.id === id
        ? { ...application, stage: application.stage - 1 }
        : application
    );
    dispatch({
      type: 'PREV_STAGE',
      applicationList: newApplicationList,
    });
  };

  const nextStage = () => {
    const newApplicationList = state.applicationList.map((application) =>
      application.id === id
        ? { ...application, stage: application.stage + 1 }
        : application
    );
    dispatch({
      type: 'NEXT_STAGE',
      applicationList: newApplicationList,
    });
  };

  return (
    <div className='application'>
      <h1 className='application__applicant'>{applicant}</h1>
      <h1 className='application__jobName'>{jobName}</h1>
      <h1 className='application__company'>{company}</h1>
      <div className='application__stageControl'>
        {stage > state.minStage ? (
          <button type='button' className='prevButton' onClick={prevStage}>
            &laquo;
          </button>
        ) : (
          ''
        )}
        {stage < state.maxStage ? (
          <button type='button' className='nextButton' onClick={nextStage}>
            &raquo;
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Application;
