import './App.css';
import FilmsView from './components/FilmsView';


const filmsObject = [
  {
    filmName: 'Супермен',
    filmPrice: '1299'
  },

  {
    filmName: 'Одинокий странник',
    filmPrice: '899'
  }
];



function App() {
  return (
    <div>
      < FilmsView filmInfo={filmsObject}  /> 
    </div>
    
  );
}

export default App;