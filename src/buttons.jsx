import React from 'react';

// export const buttonWithOnlySubmit = (identity1, openSelections) => (
//   <div className={identity1} onClick={openSelections}>
//     <img className="submit-icon-1"
//       src="https://s3.amazonaws.com/genie-placeholder/submit-butt.png"
//       alt="submit button" />
//   </div>
// );

export const buttonWithOptions = (buttonClass, selectRole, openSelections, handleSubmit) => (
  <div className={buttonClass[0]+" "+buttonClass[1]}>
    <div className={buttonClass[1] === 'submitFormWithOptions'? "role-options": 'role-options-hidden' }>
      <label>
        <input className="role-option"
          name="role-option"
          type="radio"
          value="investor"
          onClick={selectRole} />
        investor?
      </label>
      <label>
        <input className="role-option"
          name="role-option"
          type="radio"
          value="developer"
          onClick={selectRole} />
        developer?
      </label>
      <label>
        <input className="role-option"
          name="role-option"
          type="radio"
          value="other"
          onClick={selectRole} />
        just curious?
      </label>
    </div>
    <img className={buttonClass[1] === 'submitFormWithOptions' ? 'submit-icon-2' :  'submit-icon-1'}
      src="https://s3.amazonaws.com/genie-placeholder/submit-butt.png"
      onClick={buttonClass[1] === 'submitFormWithOptions' ? handleSubmit :  openSelections }
      alt="sutmit button" />
  </div>
);
