import React from 'react';
import Carousel from './components/Carousel';
import {data} from './data';

const App = () => {
  return (
    <>
        <Carousel data={data} />
    </>
  )
}

export default App