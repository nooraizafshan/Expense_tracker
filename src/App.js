import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transactionlist} from './components/Transactionlist.jsx';
import { Transaction } from './components/AddTransaction.jsx';
import { GlobalProvider } from './Context/Globalstate.jsx';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
      </div>
      <IncomeExpenses/>
      <Transactionlist/>
      <Transaction/>
      </GlobalProvider>
  );
}

export default App;
