import './App.css';
import Card from './components/Card/Card';
import cardData from './card_data.json';

function App() {
  return (
    <div className="App">
      {
        cardData.map((elem, index) =>
          <Card key={index} header={elem.header}
            price={elem.price}
            condition={elem.condition}
            color={elem.color}
          ></Card>
        )
      }
    </div>
  );
}

export default App;
