import logo from './logo.svg';
import './App.css';
import { Usercontext } from './component/context';
import Display from "./component/Display";
import { useState } from 'react';
import Item from './component/Item';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
function App() {
  let [datas,setdatas] = useState("akshat");
  return (
    <>
    <BrowserRouter>
    <Usercontext.Provider value={datas}>
      <Routes>
        <Route path='/' element={<Display></Display>}></Route>
        <Route path='/item' element={<Item></Item>}></Route>
      </Routes>
    {/* <h1>Context</h1> */}
    </Usercontext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
