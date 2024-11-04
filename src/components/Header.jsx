// src/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <div className="text-xl font-bold">Brand Name</div>
        <div className="cursor-pointer" onClick={toggleModal}>
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </header>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-end">
          <div className="bg-white p-8 rounded shadow-md m-4 w-64">
            <div className="flex items-center mb-4">
              <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full mr-4" />
              <div>
                <h2 className="text-xl">User Name</h2>
              </div>
            </div>
            <ul>
              <li className="mb-2 cursor-pointer">Settings</li>
              <li className="mb-2 cursor-pointer">About Us</li>
              <li className="mb-2 cursor-pointer">Logout</li>
            </ul>
            <button onClick={toggleModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
