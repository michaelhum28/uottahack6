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
      
      <div className="flex px-12">
      <div className="ml-10">
          <Card name="CSI2110" description="Graphs, sorting, hashing."/>
        </div>
        <div className="ml-10">
          <Card name="CEG2136" description="Designing a CPU and handling CPU control."/></div>
        <div className="ml-14">
          <Card name="MAT 1322" description="Calculus 1."/></div>
        {/* <CourseList/> */}
      </div>
      
      <Forum />
    </>
  )
}

export default App
