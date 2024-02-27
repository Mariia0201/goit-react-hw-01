import './components/Profile/Profile'
import './App.css'
import Profile from './components/Profile/Profile'
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendsList"
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"



const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
    </>
  );
};


 
export default App;