import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Api from './component/useEffect';
function App() {
  let [datas,setdatas] = useState("akshat");
  return (
    <>
    <Api></Api>
    </>
  );
}

export default App;
