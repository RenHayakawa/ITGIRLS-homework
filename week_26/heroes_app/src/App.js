import './App.css';
import Heroes from './components/Heroes';
import heroesData from './HeroesData.json'

function App() {
  return (
    <div className="App">
      {
        heroesData.map((hero) =>
          <Heroes
            name={hero.name}
            url={hero.image}
            universe={hero.universe}
            alterEgo={hero.alterEgo}
            occupation={hero.occupation}
            friends={hero.friends}
            superpowers={hero.superpowers}
            details={hero.details}
          ></Heroes>
        )
      }
    </div>
  );
}

export default App;