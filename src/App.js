import React from 'react';
import './App.css';
import { User } from './container/Users/User';
import  {Dot}  from './container/Dot/Dot';
import { Information } from './container/Information/Information';
const App = () => (
  <div className='app__bg'>
    <Dot />
    <User />
    <Information/>
  </div>
);

export default App;
