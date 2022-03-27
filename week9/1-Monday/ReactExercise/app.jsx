/* https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript */
import React from 'react';

export const EggList = (props) => {
  const eggsFinal= props.eggs.map((egg,index)=> {
   return <EasterEgg name={egg} key={index.toString()}/>
  })
  return(
  <ul>{eggsFinal}</ul>
  )
};

export const EasterEgg = (props) => {
  return(
  <li>{props.name}</li>
  )
};