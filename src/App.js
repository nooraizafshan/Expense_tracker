import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transactionlist} from './components/Transactionlist.jsx';
import { Transaction } from './components/Transaction.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Balance/>
      </div>
      <IncomeExpenses/>
      <Transactionlist/>
      <Transaction/>
     </div>
  );
}

export default App;
