import React from 'react';
import '../styles/Stage.scss';
import Application from './Application.jsx';

function Stage({ name, applicationList }) {
  return (
    <div className='stage'>
      <h1 className='stage__name'>{name}</h1>
      <div className='stage__body'>
        {applicationList.map((application) => (
          <Application
            key={application.id}
            id={application.id}
            stage={application.stage}
            applicant={application.applicant}
            jobName={application.jobName}
            company={application.company}
          />
        ))}
      </div>
    </div>
  );
}

export default Stage;
