import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from "./Searchbar.jsx";
import { Theme } from '@radix-ui/themes';
import MyApp from './button.jsx';
import Forum from './Forum.jsx';
import SideMenu from './SideMenu.jsx';
import card from './card.jsx';

function App() {

  return (
    <>
      <div className="">
        <Searchbar />
      </div>
    
      <div className="Bar">
        <SideMenu />
        
      </div>
      <div className='MainContent'>
        <card />
        <card />
        <card />
        <card />
        <card />
        <Forum />
      </div>
    </>
  )
}

export default App
