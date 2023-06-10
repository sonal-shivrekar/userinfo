import React from 'react'
import { useEffect, useState } from 'react';

 const  User:React.FC<any> = (props) => {

    const [name ,setName] = useState<string>(' ');
     const [age,setAge] = useState<number>(20); 
     const [city ,setCity] = useState<string>('');
     const [salary,setSalary] = useState<number>(50000)

     const [isError ,setIsError] = useState<any>({status:false , msg:''})
     const [isLoading,setIsLoading] = useState<any>({tatus:false,msg:''})



  const Login = () =>{
    if(name ==='php'){
      setIsError({status:true , msg:'name can not be php'});
      return;
    }
    console.log(name,age)
  }

  const checkError = (msg = "default msg") =>{
    alert(msg)
  }

  
  useEffect(() =>{
    if(isError.status)
      checkError()
  },[isError])


 const Login2 = () =>{
    if(city ==='Nagpur'){
        setIsLoading({status:true , msg :'city is nagpur'});
        return;
    }
    console.log(city,salary);
  }

  const checkLoading = (msg = 'default loading')=>{
    alert(msg)
  }

  useEffect(() =>{
    if(isLoading.status)
      checkLoading()
  },[isLoading])


  return (
    <div>

        <h1>user</h1>

        name:<input type = "text" value ={name} onChange={e =>setName(e.target.value)}/><br></br><br></br>

        Age<input type = "number" value ={age} max='2' onChange={e =>setAge(parseInt(e.target.value))}/><br></br>

        <button onClick={Login}>Login</button><br></br><br></br>

        city:<input type ="tetx" value ={city} onChange={e =>setCity(e.target.value)}/><br></br><br></br>

        salary:<input type = "number" value ={salary} onChange={e =>setSalary(parseInt(e.target.value))}/><br></br><br></br>

        <button onClick={Login2}>Login2</button>
    </div>


  )
}

export default User;