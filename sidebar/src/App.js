import React, { useState, createContext } from 'react';
import Home from './components/Home.components';
import Sidebar from './components/Sidebar.components';
import {AppProvider } from './context';
import Modal from './components/Model.components';

function App() {
  
  return (
    <AppProvider>
      <Home/>
      <Sidebar />
      <Modal/>      
    </AppProvider>

    
    );
}

export default App;
