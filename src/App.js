import './App.css';
import AddTranscation from './components/AddTranscation';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div  className='main'>
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscation />
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
