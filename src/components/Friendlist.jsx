// src/FriendsList.js
import React from 'react';

const FriendsList = ({ friends, onSelectFriend }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li
            key={index}
            className="mb-2 cursor-pointer flex items-center p-2 hover:bg-gray-300 rounded"
            onClick={() => onSelectFriend(friend)}
          >
            <img src={friend.profilePic} alt={friend.name} className="w-10 h-10 rounded-full mr-4" />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
