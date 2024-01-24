import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineSort } from "react-icons/md";
import { Link, Navigate, useLocation } from 'react-router-dom';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';


const History = () => {
  const location = useLocation();
  const [startDate , setstartDate]=useState(null)
  const [endDate , setendDate]=useState(null)
  const [loading , setLoading]=useState(null)
  const [selectedvalue, setselectedvalue] = useState('id');
  const [currentpage, setcurrentpage] = useState(0); // Start from page 1
  const [offset, setOffset] = useState(0);
  const [customer, setCustomer] = useState([]);
  const [SearchResults, setSearchResults] = useState([]);
  const [showsearch, setShowSearch] = useState(false);

 let today =new Date()
 let dd = today.getDate()
 let mt =today.getMonth() + 1
 let yr = today.getFullYear()
  let cdate = dd+ "-" + mt + "-" + yr;


  const Navigate = useNavigate()

  const recordsPerPage = 10;
 
const searchCustomers = () => {
    console.log(startDate,endDate,currentpage,recordsPerPage)
    setLoading(true);
    axios
      .get(`http://localhost:8080/bill/findBylocalDateBetween/${startDate}/${endDate}`, {
        params: {
          startDate: startDate,
          endDate: endDate,
        },
      })
      .then((response) => {
        setSearchResults(response.data.data);
        setLoading(false);
        setShowSearch(true);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert('Data not found');
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

useEffect(() => {
  getAllCommission();
}, [selectedvalue, currentpage]);



const prepage = () => {

  setcurrentpage(currentpage - 1);

};

const nextpage = () => {
  if (currentpage < offset) {
      setcurrentpage(currentpage + 1);
  }
};

const getAllCommission = () => {
  setLoading(true);
  axios
      .get(`http://localhost:8080/bill/getAllBills/${currentpage}/${recordsPerPage}/${selectedvalue}`)
      .then((response) => {
          console.log(response)
          setCustomer(response.data.data.content);
          setOffset(response.data.data.totalPages);
         
      })
      .catch((error) => {
          console.error(error);
          
      }).
      finally(()=>{
          setLoading(false);
      })
};

const logout =()=>{
    localStorage.clear()
    Navigate('/')
}



const Csvfile_For_Type = (e) => {
  e.preventDefault();
  setLoading(true);
  console.log( startDate,endDate)

  axios
    .get(`http://localhost:8080/bill/csv/${startDate}/${endDate}`)
    .then((response) => {
      // Extract CSV data from the response
      console.log(response)
      const csvData = response.data;


      // Create a Blob containing the CSV data
      const blob = new Blob([csvData], { type: 'text/csv' });

      // Create a download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `transaction_${startDate}_${endDate}_data.csv`;
      link.click();

      // Clean up
      URL.revokeObjectURL(link.href);
      console.log(response.data)
    })
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        alert("Data not found");
        console.log(err);
      } else {
        console.log(err);
      }
    })
    .finally(() => {
      setLoading(false); // Set loading to false when request is completed
    });
};

const Billdata = showsearch ? SearchResults : customer;

  
  return (
 <>



<nav class="">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
  <p style={{textDecoration:'none'}} class="flex items-center space-x-3 ">
        <img src="./king_logo.png" class="h-14" alt="king Logo" />
        <div>
        <span class="self-center text-3xl font-bold text-orange-800">Kingfisher Jungle Stay</span>
        <p class="self-center text-dark text-2xl ml-1 mt-2">Dandeli</p>
        </div>
    </p>

     <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> 
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    
        <li>
          <Link to='/billing' style={{textDecoration:'none'}} className={`block py-2 px-3 md:p-0 ${location.pathname === '/billing' ? 'text-red-900' : 'text-gray-500'}`}>Billing</Link>
        </li>
        <li>
          <Link to='/history' style={{textDecoration:'none'}} className={`block py-2 px-3 md:p-0 ${location.pathname === '/history' ? 'text-red-900' : 'text-gray-500'}`}>History</Link>
        </li>
        <li className='py-2 px-3'>
                Date : {cdate}
        </li>

        <li className='py-2 px-3'>
                <p className='py-1 px-2' onClick={logout} style={{background:'#7F0707',color:'white', borderRadius:'10px',cursor:'pointer'}}> Logout</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto ">
                            <p style={{ display: 'flex', justifyContent: 'end' }}>
                            
                                <div style={{marginLeft:'2%',marginRight:'2%'}}>
                                <th style={{color:'#7F0707'}} >Start Date</th>
                                <input
                                    type='date'
                                    style={{ marginLeft: '2%' }}
                                    className='form-control'
                                    value={startDate}
                                    onChange={(e) => setstartDate(e.target.value)}
                                />
                                </div>
                                <div style={{marginLeft:'2%',marginRight:'2%'}}>
                                <th style={{color:'#7F0707'}}>End Date</th>
                                <input
                                    type='date'
                                    style={{ marginLeft: '2%' }}
                                    className='form-control'
                                    value={endDate}
                                    onChange={(e) => setendDate(e.target.value)}

                                />
                                </div>
                            </p>
                            <p>
                                <button className='btn btn-warning' style={{ marginRight: '5px', marginLeft: '5px', marginTop:'30%',background:'#7F0707',color:'white'}} onClick={searchCustomers}>
                                    Search
                                </button>
                            </p>
                        </div>
  
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <div class="self-center text-2xl font-semibold whitespace-nowrap text-red-900 ">
        <p>History</p>
    </div>
    <div className='flex'>
        <button className='btn' onClick={Csvfile_For_Type} style={{background:'#7F0707',color:'white'}}>Generate CSV</button>
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
                    Invoice No
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                 <th scope="col" class="px-6 py-3">
                    Persons
                </th>
                 <th scope="col" class="px-6 py-3">
                    Revenue
                </th>
            </tr>
        </thead>
        <tbody>
          {
            Billdata.map((val, index)=>{
              return(
                <>
                   <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                </th>
                <td class="px-6 py-4">
                 {val.customerName}
                </td>
                <td class="px-6 py-4">
                {val.customerPhone}
                </td>
                <td class="px-6 py-4">
                {val.invoiceNumber}
                </td>
                <td class="px-6 py-4">
                {val.localDate}
                </td>
              <td class="px-6 py-4">
                {val.totalCustomer}
                </td>

                <td class="px-6 py-4">
              {val.totalCost}
                </td>

            </tr>
                </>
              )
            
            })
          }
            
           
        </tbody>
    </table>

    <nav className='mt-5'>
                            <ul className='pagination justify-content-center'>
                                <li className={`page-item${currentpage === 0 ? ' disabled' : ''}`}>
                                    <a href='#' className='page-link' onClick={prepage}>
                                        Pre
                                    </a>
                                </li>

                                {[...Array(offset).keys()].map((n, i) => {
                                    const pageNumber = n + 1;

                                    if (pageNumber === 1 || pageNumber === 2 || pageNumber === currentpage || pageNumber === currentpage - 1 || pageNumber === currentpage + 1 || pageNumber === offset) {
                                        return (
                                            <li className={`page-item${currentpage === pageNumber ? ' active' : ''}`} key={i}>
                                                <a href='#' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className='page-link' onClick={() => setcurrentpage(pageNumber)}>
                                                    {pageNumber}
                                                </a>
                                            </li>
                                        );
                                    } else if (pageNumber === offset - 2) {
                                        // Show ellipsis for the middle numbers
                                        return (
                                            <li key={i} className='page-item disabled'>
                                                <span className='page-link'>...</span>
                                            </li>
                                        );
                                    } else {
                                        return null; // Hide other page numbers
                                    }
                                })}


                                <li className={`page-item${currentpage === offset ? ' disabled' : ''}`}>
                                    <a href='#' className='page-link' onClick={nextpage}>
                                        Next
                                    </a>
                                </li>
{/* 
                                <li className='page-item'>
                                    <select
                                        value={selectedvalue}
                                        onChange={(e) => setselectedvalue(e.target.value)}
                                        className='form-control'
                                    >
                                        <option value='id'>Bill Id</option>
                                        <option value='Name'>Name</option>
                                        <option value='Contact'>Contact</option>
                                        <option value='Invoice_No'>Invoice No</option>
                                        <option value='date'>Date</option>
                                        <option value='Persons'>Persons</option>
                                        <option value='Revenu'>Revenu</option>
                                    </select>
                                </li> */}
                            </ul>
                        </nav>
</div>





</>

  )
}

export default History