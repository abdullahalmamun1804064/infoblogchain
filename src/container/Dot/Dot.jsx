import React from 'react'
import { Rectungulardot } from '../../components/rectungulardot/Rectungulardot'
import './dot.css'

export const Dot = () => {
  let i,sum=0;
  const p=[];
  for (i = 0; i < 8; i++){
        p[sum++] = <Rectungulardot />;
    }
    


  return (
    <div className="app__dots " id='dots'>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
      <div>{p.map((value) => value)}</div>
    </div>
  );
}
