import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Signup = () => {

  const [firstname , setfirstname]=useState(null)
  const [lastname , setlastname]=useState(null)
  const [email , setEmail]=useState(null)
  const [password , setpassword]=useState(null)
  const [phone , setPhone]=useState(null)
  const [showPassword , setshowPassword]=useState(false)
  const [loading, setloading]=useState(false)

  const Navigate =useNavigate()

  const ChangePasswordType =()=>{
    setshowPassword(!showPassword)
  }

  const data ={
    adminName:firstname + lastname,
    email:email,
    password:password,
    address: "null",
    adminProfilePic: "null",
    phone:phone

  }

  const formSubmit=(e)=>{
    console.log(data)
    setloading(true)
    e.preventDefault()
    axios.post('http://localhost:8080/admin/save',data)
    .then((response)=>{
        console.log(response)

        if(response.status === 201){
            Navigate('/')
            alert('Thank You For Registration')
        }
    }).catch(err=>{
        console.log(err)
       
    })
    .finally(()=>{
        setloading(false)
    })
}

  return (
    <div>
       <div className='container-fluid'>
        <div className='row'>
      

   <div className='col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <img  alt='Not found' src='background.png' style={{ height: '100vh', width: '100vh' }} />

  <div class="absolute bottom-45 left-30" style={{ textAlign: 'center' }}>
    <img src='logo.png' alt='Not found' style={{ margin: 'auto' }} />
    <div className="text-center text-white">
      <h3>Welcome To </h3>
      <h2>KINGFISHER RESORT</h2>
      <h3>Dandeli</h3>
    </div>
  </div>
</div>


          <div className='col-lg-6'>
            <div className="text-center justify-center mt-5">
            <h2>Sign Up</h2>
</div>
<form onSubmit={formSubmit} class="max-w-sm mx-auto mt-5">
  <div class="">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> First Name</label>
    <input type="text"  value={firstname} onChange={(e)=>setfirstname(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
   <div class="">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="text"  value={lastname} onChange={(e)=>setlastname(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
<div class="">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type={showPassword ? "text" : "password"} 
    pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._-])[A-Za-z0-9!@#$%^&*._-]{8,}$"
    title="Password must contain at least one capital letter, one number, one special character, and be at least 6 and max 15 characters long."
     value={password} onChange={(e)=>setpassword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div class="flex items-start justify-between mt-3">
    <div class="flex items-center">
      <input  value={showPassword} type="checkbox" onChange={ChangePasswordType} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
     </div>
  
    
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Sign up</button>
  <p>Already have an acount ?<Link to='/'> Log in</Link></p>

                <div width={50} height={40}>
                    {loading && <Loader width={30} height={30} />}
                </div>
</form>

          </div>

        </div>

       </div>

    </div>
  )
}

export default Signup;
 