import './App.css';
import Panel from './components/panel'

import Profile from './components/social-profile/profile';
import socialeProfileInfo from './components/social-profile/social-profile.json';

import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';

import FriendList from './components/friend-list/friend-list';
import friends from './components/friend-list/friend-info.json';

import TransactionHistory from './components/transaction-history/transaction-history';
import transactions from './components/transaction-history/transactions.json';


const App = () => {
  return (
    <div className="App">
      <h1 className="page-name"> Homework 1 </h1>

      <div className="main-content">
          <Panel className="social-profile-panel"title="First task" taskName="social-profile">        
              <Profile items={socialeProfileInfo} />
          </Panel>

          <Panel className="statistics-panel"title="Second task" taskName="statistics">
            <Statistics title="Upload stats" items={statisticalData} />
          </Panel>

          <Panel className="friend-list-panel" title="Third task" taskName="friend-list">
            <FriendList items={friends} />
          </Panel>

          <Panel className="transaction-history-panel" title="Fourth task" taskName="transaction-history">
            <TransactionHistory items={transactions} />
          </Panel>
      </div>
    </div>
  );
}

export default App;
