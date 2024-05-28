import React from 'react';
import Question from '../../elements/question/question';
import '../questionBox.css'

function Page_3({ updateSelectedOptions, selectNextPage, calculateTotalCost  }) {
  return (
    <div>
      <div className="questionBox">
        <div className="zagol">
          <h1>Сколько страниц сайта планируется?</h1>
        </div>
        <div className="questions">
          <Question quest="1" cost={0} name={'eshesh'} updateSelectedOptions={updateSelectedOptions} isRadio={true}/>
          <Question quest="2-3" cost={32500} name={'eshesh'} updateSelectedOptions={updateSelectedOptions} isRadio={true}/>
          <Question quest="4-5" cost={44700} name={'eshesh'} updateSelectedOptions={updateSelectedOptions} isRadio={true}/>
          <Question quest="6-8" cost={62800} name={'eshesh'} updateSelectedOptions={updateSelectedOptions} isRadio={true}/>
          <Question quest="Блоее 9" cost={70000} name={'eshesh'} updateSelectedOptions={updateSelectedOptions} isRadio={true}/>
        </div>
        <button className='ButtonNext' onClick={calculateTotalCost}> Далее</button>

      </div>
    </div>
  );
}

export default Page_3;