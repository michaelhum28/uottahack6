import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from "./Searchbar.jsx";
import "@radix-ui/themes/styles.css"
import MyApp from './button.jsx';
import Forum from './Forum.jsx';
import Card from './card.jsx';

function App() {

  return (
    <>
      <div className="">
        <Searchbar />
      </div>
      
      <div className="container px-12">
        <Card name="csi2110" description="somethng"/>
      </div>
      
      {/* <Forum /> */}
    </>
  )
}

export default App
