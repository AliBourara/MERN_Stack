
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person = [
    {firstName:"jane",lastName:"Doe",age:45,hairColor:"Black"},
    {firstName:"John",lastName:"Smith",age:88,hairColor:"Brown"},
    {firstName:"Millard",lastName:"Filmore",age:50,hairColor:"Brown"},
    {firstName:"Maria",lastName:"Smith",age:62,hairColor:"Brown"}
  ]
  return (
    <div className='App' >
      <div>

      {person.map((person, index) => <PersonCard key={index} person={person} />)}
      </div>

    </div>
  );
}

export default App;
