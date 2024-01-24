import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'
const Adminresetpass = () => {

    const Navigate=useNavigate()

    const [email,setemail]=useState('')
    const [status,setstatus]=useState('')
    const [loading, setLoading]=useState(false)


    const resetpass=(e)=>{
        setLoading(true)
        e.preventDefault()
        axios.post(`http://localhost:8080/admin/password/verifyEmailBeforeUpdatePassword/${email}`,{
          params: {
            'email': email,
           
          },
        }
        )
        .then((respose)=>{
            console.log(respose.data)

            if(respose.data.status === 200){
                Navigate('/adminotp')
            }
        }).catch(err=>{
            console.log(err)
            setstatus('Email not Valid')
        })
        .finally(()=>{
            setLoading(false)
        })
    }

  return (
    <div className='container' style={{textAlign:'center'}}>
      <h1 className='mt-3 fw-bold' style={{fontFamily:'serif'}}>Enter Your Email</h1>
        <form onSubmit={resetpass}>
      <input className='form-control' value={email} type='text' placeholder='Enter Email' onChange={e=>setemail(e.target.value)}/>
      <p>{status}</p>
      
      <input  className='btn  mt-3' type='submit' style={{background:'#4942E4', color:'white'}}/>
      </form>
      <div width={50} height={40}>
        {loading  && <Loader style={{width:"30px",height:'30px'}} /> }
      </div>
    </div>
  )
}

export default Adminresetpass
