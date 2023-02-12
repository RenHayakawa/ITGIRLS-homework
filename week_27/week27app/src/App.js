import './App.css';
import Card from './components/Card/Card';
import cardData from './card_data.json';

function App() {
  return (
    <div className="App">
      {
        cardData.map((elem) =>
          <Card header={elem.header}
            price={elem.price}
            condition={elem.condition}
            color={elem.color}
            select={elem.select}
          ></Card>
        )
      }
    </div>
  );
}

export default App;
