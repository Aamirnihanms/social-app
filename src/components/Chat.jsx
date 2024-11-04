// src/ChatArea.js
import React from 'react';

const ChatArea = ({ selectedFriend }) => {
  return (
    <div className="w-3/4 p-4">
      {selectedFriend ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Chat with {selectedFriend.name}</h2>
          {/* Chat interface goes here */}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <h2 className="text-2xl font-bold">Your Branding Here</h2>
        </div>
      )}
    </div>
  );
};

export default ChatArea;
