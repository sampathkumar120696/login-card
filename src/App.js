
import './App.css';
import Logincard from './component/Logincard';

function App() {

  const userData = [{
    userName: 'SAMPATH',
    pin: 4001
  },
  {
    userName: 'VICKY',
    pin: 4002
  },
{
  userName:'ANAND',
  pin:4003
},
{
  userName:'SANTHOSH',
  pin:4004
}]


  return (
    <div className="App">
      <Logincard userData={userData}/>
    </div>
  );
}

export default App;
