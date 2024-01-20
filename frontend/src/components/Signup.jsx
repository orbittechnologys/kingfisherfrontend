import React from 'react'

const Signup = () => {
  return (
    <div>
       <div className='container-fluid'>
        <div className='row'>
      

   <div className='col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <img className="relative" src='background.png' style={{ height: '100vh', width: '100vh' }} />

  <div class="absolute bottom-45 left-30" style={{ textAlign: 'center' }}>
    <img src='logo.png' style={{ margin: 'auto' }} />
    <div className="text-center text-white">
      <h3>Welcome To </h3>
      <h2>KINGFISHER RESORT</h2>
      <h3>Dendeli</h3>
    </div>
  </div>
</div>


          <div className='col-lg-6'>
            <div className="text-center justify-center mt-5">
            <h2>Sign Up</h2>
</div>
<form class="max-w-sm mx-auto mt-5">
  <div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> First Name</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
   <div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
<div class="">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 mt-2 " placeholder="" required/>
  </div>
  <div class="flex items-start justify-between mt-3">
    <div class="flex items-center">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
     </div>
  
    
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Sign up</button>
  <p>Already have an acount ? Log in</p>
</form>

          </div>

        </div>

       </div>

    </div>
  )
}

export default Signup;
 