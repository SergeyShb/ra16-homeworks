import './App.css';
import Items from './components/Items';
import etsy from './etsy.json';   // импорт файла с данными



const data = etsy;   // присваиваем константе data данные импортированного файла etsy.json

console.log(data);




function App() {
  return (
    <div className="App">
      <Items info={data} />
    </div>
  );
}



export default App;