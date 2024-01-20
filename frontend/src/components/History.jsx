import React from 'react'
import { MdOutlineSort } from "react-icons/md";


const History = () => {
  return (
 <>



<nav class="">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src='logo.png' className='w-20'/>
        <span class="self-center text-xl font-semibold whitespace-nowrap text-red-900">Kingfisher Jungle Stay <br /> Dendeli </span>
       
   
    </a>

     <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> 
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-500">Billing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-red-900">History</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
    <div class="self-center text-2xl font-semibold whitespace-nowrap text-red-900 ml-20">
        <p>History</p>
    </div>
    <div className='flex'>
        <p>by week</p> 
     <MdOutlineSort />
    </div>
</div>




<div class="relative overflow-x-auto">

    <table class="w-5/6 text-sm  text-gray-500 dark:text-gray-400 mx-auto">
        <thead class="heading text-xs uppercase bg-red-50 text-red-900 border-gray-300 border-2 rounded p-10 ">

             
            <tr>
                <th scope="col" class="px-6 py-3 ">
                    Sl No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                 <th scope="col" class="px-6 py-3">
                    People
                </th>
                 <th scope="col" class="px-6 py-3">
                    Revenue
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    01
                </th>
                <td class="px-6 py-4">
                  Anjum
                </td>
                <td class="px-6 py-4">
                8327534543
                </td>
                <td class="px-6 py-4">
                 anju2@gmail.com
                </td>
              <td class="px-6 py-4">
                 ----
                </td>

                <td class="px-6 py-4">
                 ----
                </td>

            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 02
                </th>
                <td class="px-6 py-4">
                  sonal
                </td>
                <td class="px-6 py-4">
                    9876663622
                </td>
                <td class="px-6 py-4">
                    sonal@gmail.com
                </td>
                  <td class="px-6 py-4">
                  ---- 
                </td>
                  <td class="px-6 py-4">
               -----
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  03
                </th>
                <td class="px-6 py-4">
                    Tahreen
                </td>
                <td class="px-6 py-4">
                    9438578443
                </td>
                <td class="px-6 py-4">
                    tahren@gmail.com
                </td>
                   <td class="px-6 py-4">
                    -----
                </td>
                   <td class="px-6 py-4">
                    -----
                </td>
            </tr>
        </tbody>
    </table>
</div>





</>

  )
}

export default History