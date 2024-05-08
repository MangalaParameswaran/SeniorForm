import React, { useState } from 'react'
import { message} from 'antd'
import axios from 'axios'

const Form = () => {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [number, setNumber]=useState('')
    // console.log(name);
    // console.log(email);
    // console.log(number)
    let data={name, email, number}

    const Submitdata=async(e)=>{
        e.preventDefault();  
        try {
        let res=await axios.post('http://localhost:3000/post', data)
        console.log("res", res);
        setEmail('')
        setName('')
        setNumber('')
        message.success(res.data.message)
        setTimeout(()=>{
            window.location.reload()
        }, 1000)

       } catch (error) {
        message.error(`${error}`)
        console.log(error);
       }
    }


  return (
    <>
    <form layout='vertical'  onSubmit={Submitdata} >
        <label>Name</label>
        <input type='text'  required={true} onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input type='email'  required={true} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Phone Number</label>
        <input type='number'  required={true} onChange={(e)=>setNumber(e.target.value)}/><br/>
        <button type='submit' className='btn btn-primary'>Sumbit</button>
    </form>
    </>
  )
}

export default Form