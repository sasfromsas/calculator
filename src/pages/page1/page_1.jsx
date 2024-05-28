import React from 'react';
import Question from '../../elements/question/question';
// import './page_1.css'
import '../questionBox.css'
function Page_1({ updateSelectedOptions, selectNextPage }) {


  return (
    <div>
      <div className='questionBox'>
      <div className="zagol">
        <h1>Для чего нужен сайт?</h1>
      </div>
        <div className='questions'>
          <Question quest="Продажа услуг" cost={74400} name={'kefteme'} updateSelectedOptions={updateSelectedOptions} isRadio={true} />
          <Question quest="Продажа инфопродуктов" cost={74400} name={'kefteme'} updateSelectedOptions={updateSelectedOptions} isRadio={true} />
          <Question quest="Продажа товаров" cost={74400} name={'kefteme'} updateSelectedOptions={updateSelectedOptions} isRadio={true} />
          <Question quest="Другое" cost={74000} name={'kefteme'} updateSelectedOptions={updateSelectedOptions} isRadio={true} />
        </div>
        <button className='ButtonNext' onClick={selectNextPage}> Далее</button>
      </div>
    </div>
  );
}

export default Page_1;