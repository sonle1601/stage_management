import React from 'react';
import Stage from './Stage.jsx';
import '../styles/Container.scss';
import { useStateValue } from './StateProvider';
import AddApplicationPopUp from './AddApplicationPopUp.jsx';

function Container() {
  const [state, dispatch] = useStateValue();

  const togglePopup = () => {
    dispatch({
      type: 'TOGGLE_POPUP',
    });
  };

  return (
    <div className='container'>
      <button type='button' className='addApplicationBtn' onClick={togglePopup}>
        &#x0002B;
      </button>

      {/* check the variable popupSeen in state, if true, show the popup, else hide it*/}
      {state.popupSeen ? <AddApplicationPopUp /> : null}

      {/* the position of stage is fixed, so go through the applicationList and print the application with same stage number */}
      <Stage
        name='Incoming'
        applicationList={state.applicationList.filter(
          (application) => application.stage === 1
        )}
      />
      <Stage
        name='First Contact'
        applicationList={state.applicationList.filter(
          (application) => application.stage === 2
        )}
      />
      <Stage
        name='Second Contact'
        applicationList={state.applicationList.filter(
          (application) => application.stage === 3
        )}
      />
      <Stage
        name='Verbal Comittmen'
        applicationList={state.applicationList.filter(
          (application) => application.stage === 4
        )}
      />
    </div>
  );
}

export default Container;
