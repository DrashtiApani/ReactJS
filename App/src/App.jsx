import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './Header';
import Banner from './banner';
import Page from './Page';





function App() {
  const [count, setCount] = useState(0)

  let a = 10;

  return (
    <>
      <div>

        <Header />
        <Banner />
      </div>

      <div>
        <Page a={a} />
      </div>




    </>

  )
}

export default App
