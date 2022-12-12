import React from 'react';
import { AppProvider } from './context';
import Hero from './components/Hero.components';
import Navbar from './components/Navbar.components';
import Sidebar from './components/Sidebar.components';
import SubMenu from './components/SubMenu.components';

function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <Navbar />
        <Sidebar/>
        <Hero />
        <SubMenu/>
      </AppProvider>
 
      
      {/* <Sidebar />
      <Hero />
      <SubMenu/> */}
    </React.Fragment>
    
  );
}

export default App;
