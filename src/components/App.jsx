import React from 'react';

//Profile
import  user  from './Profile/user.json'
import { Profile } from './Profile/Profile.jsx';
//Statistics
import  data  from '../components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics.jsx';
//FriendList
import friends from './FriendList/friends.json';
import { Friends } from '../components/FriendList/FriendList';
//TransactionHistory
import transactions from './TransactionHistory/transactions.json'
import { Transactions } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />
  <Friends friends={friends}/>
  <Transactions items={transactions}/>   
    </>
  )
}

