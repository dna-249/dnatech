import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Apply = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [inputs, setInputs] = useState([''])
    const [data, setData] = useState('')





    

    const handleRequest = (params) => {
        console.log(input1)
      setInputs(()=>[input2,input3,input4,input5])
      axios.post(`http://localhost:3000/api/users`, {name:input2,email:input5}).then(res => {alert('ok'); console.log(res);setData(()=>res.data)} ).catch(err => {console.log(err)})
      axios.get(`http://localhost:3000/api/users`).then(res => {alert('ok'); console.log(res);;setData(()=>res.data)} ).catch(err => console.log(err))
 
    }
    
  return (
    <div className='center'>
        <div className='apply'>
        <div><img src=''/>
             <input type='file' onChange={(e)=>setInput1(e.target.files[0])} />
        </div>
        <div>First Name:<input onChange={(e)=>setInput2(e.target.value)} type='text'  placeholder='first name...'/></div>
        <div>Last Name:<input onChange={(e)=>setInput3(e.target.value)} type='text' placeholder='last name...'/></div>
        <div>Phone:<input onChange={(e)=>setInput4(e.target.value)} type='number'placeholder='phone...'/></div>
        <div>Email:<input onChange={(e)=>setInput5(e.target.value)} type='email'placeholder='active email...'/></div>
         <button onClick={()=>handleRequest()}>summit</button>
    </div>
    </div>
  )
}

export default Apply