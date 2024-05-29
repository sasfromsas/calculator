import React, { useState } from 'react';
import Page_1 from './pages/page1/page_1';
import Page_2 from './pages/page2/page_2';
import Page_3 from './pages/page3/page_3';
import Page_4 from './pages/page4/page_4';
import './app.css';


function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalCost, setTotalCost] = useState(0)
  const [currentPage, setCurrectPage] = useState(0)

  const updateSelectedOptions = (option, isSelected) => {
    if (isSelected) {
      // Если опция выбрана, добавляем её в массив, если она ещё не добавлена
      if (!selectedOptions.some(o => o.quest === option.quest)) {
        setSelectedOptions(prevOptions => [...prevOptions, option]);
      }
    } else {
      // Если опция не выбрана, удаляем её из массива
      setSelectedOptions(prevOptions => prevOptions.filter(o => o.quest !== option.quest));
    }
  };
  


  const sendOrderToDatabase = () => {
    fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order_details: selectedOptions }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Успешно отправлено в БД')
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Ошибка отправления в БД')
    });
    startAgain()
  };



  const selectNextPage = () => {
    setCurrectPage(currentPage + 1)
  }

  // При прохождении теста заново сбрасываем данные
  const startAgain = () => {
    setCurrectPage(0)
    setTotalCost(0)
    setSelectedOptions([])
  }

  // кнопка завершения теста на 3 слайде
  const calculateTotalCost = () => {
    setTotalCost(selectedOptions.reduce((acc, option) => acc + option.cost, 0))
    setCurrectPage(currentPage + 1)

  };

  return (
      <body>
      <div className="main">
        <h1>Онлайн-калькулятор</h1>
        {currentPage === 0 && <Page_1 updateSelectedOptions={updateSelectedOptions} selectNextPage={selectNextPage} />}
        {currentPage === 1 && <Page_2 updateSelectedOptions={updateSelectedOptions} selectNextPage={selectNextPage}/>}
        {currentPage === 2 && <Page_3 updateSelectedOptions={updateSelectedOptions} selectNextPage={selectNextPage} calculateTotalCost={calculateTotalCost}/>}
        {currentPage === 3 && <Page_4 updateSelectedOptions={updateSelectedOptions} selectNextPage={selectNextPage} totalCost={totalCost} startAgain={startAgain} onSubmit={sendOrderToDatabase}/>}
        
        {/* для тестов */}
       {/* <div>
       текущий слайд {currentPage}
      
         <h3>Выбранные варианты:</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option.quest}: {option.cost} руб.</li>
          ))}
        </ul>
       </div> */}
       
      </div>
      </body>
    
  );
}

export default App;
