import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from "./Searchbar.jsx";
import "@radix-ui/themes/styles.css"
import MyApp from './button.jsx';
import Forum from './Forum.jsx';
import SideMenu from './SideMenu.jsx';
import Card from './Card.jsx';

function App() {

  return (
    <>
      <div className="">
        <Searchbar />
      </div>

      <div className="Bar">
        <SideMenu />
      </div>
      
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
      <Forum />
    </>
  )
}

export default App
