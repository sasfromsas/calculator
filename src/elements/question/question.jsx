import React, { useState } from 'react';
import './question.css';
const Question = ({ quest, cost, updateSelectedOptions, isRadio, name }) => {
  const [selected, setSelected] = useState(false);

  const handleToggle = (e) => {
    const isSelected = !selected;
    setSelected(isSelected);
    updateSelectedOptions({ quest, cost }, isSelected);
    if (!selected && isRadio) {
      const checkboxes = document.querySelectorAll(`input[type='checkbox'][name='${name}']`);
      checkboxes.forEach((checkbox) => {
        if (checkbox !== e.target) { 
          checkbox.disabled = true;
        }
      });
    } else if (selected && isRadio) {
      const checkboxes = document.querySelectorAll(`input[type='checkbox'][name='${name}']`);
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  };

  return (
    
      <div className='questionsMain'>
        <label className='question'>
          {isRadio ? (
            <input  type="checkbox" checked={selected} onChange={handleToggle} name={name} />
          ) : (
            <input  type="checkbox" checked={selected} onChange={handleToggle} />
          )}
           {" " + quest}
        </label>
      </div>
    
  );
};

export default Question;