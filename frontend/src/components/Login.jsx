import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Login = ({setIsLoggedIn}) => {

  const [email , setEmail]= useState(null)
  const [password , setpassword]= useState(null)
  const [showPassword ,setshowPassword] =useState(false)
  const [status ,setstatus] =useState(null)
  const [loading, setloading]=useState(false)

  // const Navigate =useNavigate()

  const ChangeText =()=>{
    setshowPassword(!showPassword)
  }

  const Navigate = useNavigate()

  

  const login=(e)=>{
    console.log(email, password)
    setloading(true)
    e.preventDefault()
    axios.get(`http://localhost:8080/admin/adminLogin/${email}/${password}`)
    .then((response)=>{
        console.log(response)

        if(response.status === 200){
          setIsLoggedIn('true')
          localStorage.setItem('user',response.data.data.email)
            Navigate('/billing')
        }
    }).catch(err=>{
        console.log(err)
        setstatus('Email not Valid')
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
  <img className="relative" alt='Not found' src='background.png' style={{ height: '100vh', width: '100vh' }} />

  <div className="absolute bottom-45 left-30" style={{ textAlign: 'center' }}>
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
            <h2>Log In</h2>
</div>
<form onSubmit={login} className="max-w-sm mx-auto mt-5">
  <div className="">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div className="mt-8">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"> Password</label>
    <input type={showPassword ? 'text': 'password'} value={password} onChange={(e)=>setpassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3" required/>
  </div>
  <div className="flex items-start justify-between mt-3">
    <div className="flex items-center">
      <input id="remember" type="checkbox"value={showPassword} onChange={ChangeText} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
     </div>
  
     <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "><Link to='/adminresetpass'>Forget Password</Link></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Log in</button>
<p>Don’t have an accout ? <Link to='/signup'><span style={{color:'#2FA8E1'}}>Sign up</span></Link></p>
<p className='text-danger'>{status}</p>
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

export default Login
 