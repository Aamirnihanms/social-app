// src/Home.js
import React, { useState } from 'react';
import FriendsList from '../components/Friendlist';
import ChatArea from '../components/Chat';
import Header from '../components/Header';

const Home = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const friends = [
      { name: 'Alice', profilePic: 'https://via.placeholder.com/50' },
      { name: 'Bob', profilePic: 'https://via.placeholder.com/50' },
      { name: 'Charlie', profilePic: 'https://via.placeholder.com/50' },
    ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <FriendsList friends={friends} onSelectFriend={setSelectedFriend} />
        <ChatArea selectedFriend={selectedFriend} />
      </div>
    </div>
  );
};

export default Home;
