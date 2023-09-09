// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './assets/components/Buttons';
import Child from './assets/components/Child';
import Usestateex from './assets/components/Usestateex';
import OnclickEvent from './assets/components/OnclickEvent';




function App() {
  let arr=[1,2,3,4,5,6]

  return (
    <div>
        {/* <Child arr={arr} /> */}
        <Usestateex  />
        {/* <OnclickEvent /> */}

    </div>
    
    
      )
  
}

export default App
