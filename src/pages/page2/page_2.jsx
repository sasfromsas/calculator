import React from 'react';
import Question from '../../elements/question/question';
import '../questionBox.css'

function Page_2({ updateSelectedOptions, selectNextPage }) {
  // const handleCalculate = () => {
  //   alert(`Итоговая стоимость: $${totalCost}`);
  // };

  return (
    <div>
      <div className="questionBox">
        <div className="zagol">
          <h1>Что точно должно быть на сайте?</h1>
        </div>
        <div className="questions">
          <Question quest="Пока не знаю" cost={0} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Долями" cost={3400} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Рассрочка или кредит" cost={2300} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Оплата картами" cost={4500} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Оплата иностр.картами" cost={3400} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Чат-бот" cost={11800} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Автописьма" cost={2700} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Онлайн-запись" cost={4900} updateSelectedOptions={updateSelectedOptions} />
          <Question quest="Другое" cost={0} updateSelectedOptions={updateSelectedOptions} />
        </div>
        <button className='ButtonNext' onClick={selectNextPage}> Далее</button>

      </div>
      {/* <button onClick={handleCalculate}>Подсчитать</button> */}
    </div>
  );
}

export default Page_2;