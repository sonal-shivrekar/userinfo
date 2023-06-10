import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
/*import { promises } from 'dns';
import { resolve } from 'path';
import { rejects } from 'assert';
import { config } from 'process';*/

function effectLogic() {

  const [isLoading,setIsLoading] = useState<boolean>(false);

  const [isError,setIsError] =useState<boolean>(false);


  useEffect(() =>{
    console.log('is loding', isLoading);
  },[isLoading])


  useEffect(()=>{
    console.log('is error',isError);
  },[isError])


  useEffect(()=>{
    if(isLoading)
    console.log('form user effect is loading',isLoading);

    if(isError)
    console.log('form user effect is error',isError)
  },[isLoading , isError])
  

  const changeLoadingState =() =>{
    const loadingState =!isLoading;
    setIsLoading(loadingState);
  }

  const changeErrorState =() =>{
    const ErrorState = !isError;
    setIsError(ErrorState);
  }




  /*const useAPI = async() =>{
   return new Promise<any>((resolve,reject) =>{
        return setTimeout(() =>{
            resolve({name : 'arc'});
        },1000)
   })      
  }; 

  const getUserData = async() =>{
    console.log('test before');
    const userData = await useAPI().catch((err) =>{console.log('err',err)});
    console.log('userData',userData)
    console.log('test after res');

  }

  const [title, setTitle] = useState('no change')
  useEffect(() =>{ 
    getUserData()
   },[] )*/



  return (
    <div className="App">
      <h1>user effect</h1>

      {isLoading ? '....Loading' : 'Loaded'} <br></br>

      {isError ? 'there is a error' :'no error'}



      <button onClick={changeLoadingState}>changeLoading</button><br></br>

      <button onClick={changeErrorState}>changeError</button>
    </div>
  );
}

export default effectLogic;
