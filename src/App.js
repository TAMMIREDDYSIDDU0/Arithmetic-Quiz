import logo from './logo.svg';
import './App.css';
import Quiz1 from './Components/Quiz1/Quiz1';
function App() {
  return (
    <div className="App row">
<div className="col-lg-6">
<Quiz1  num={1}/>
</div>

<div className="col-lg-6">
<Quiz1 num={2}/>
</div>
    </div>
  );
}

export default App;
