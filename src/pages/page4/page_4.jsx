import React from 'react';
import '../questionBox.css'
import './page_4.css'

function Page_4({ calculateTotalCost, totalCost, startAgain, onSubmit   }) {

  return (
    <div>
      <div className='questionBox'>
        <div className="zagol">
          <h1>Стоимость разработки</h1>
        </div>
        <h1>{totalCost}р</h1>
        <button className='ButtonNext' onClick={startAgain}>Начать заново</button>
        <button className='ButtonNext' onClick={onSubmit}>Оформить заказ</button>
      </div>
    </div>
  );
}

export default Page_4;