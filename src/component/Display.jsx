import React from 'react'
import { useContext } from 'react';
import { Usercontext } from './context';
function Display() {
  const datasfirst = useContext(Usercontext);
  return (
    <>
    <h1>{datasfirst}</h1>
    </>
  )
}

export default Display;