import React,{useCallback, useState} from 'react';

export default function Usecallback(){
    let[data,setData]=useState();

    //the callback hook in react memorizes a function ,ensuring is does not get recreated unnecessarily on every render.
    const memory = useCallback(()=>{
        console.log(data);
    },[setData()])


    return (
        <>
        </>
    )
}