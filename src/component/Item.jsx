import React ,{useContext}from 'react'
import { Usercontext } from './context'
function Item() {
    let name = useContext(Usercontext);
  return (
    <>
    <h1> item </h1>
    <h3>Name = {name}</h3>
    </>
  )
}

export default Item