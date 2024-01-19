import React, { useState } from 'react'
import { SiPhonepe } from "react-icons/si";
import ReactDOMServer from 'react-dom/server'; // Add this import

const Billing = () => {

  const [cName , setcName]=useState(null)
  const [Persons , setPersons]=useState(null)
  const [Contact , setContact]=useState(null)
  const [Nights , setNights]=useState(null)
  const [Check_In , setCheck_In]=useState(null)
  const [Check_out , setCheck_out]=useState(null)
  const [GST , setGST]=useState(null)
  const [Activities , setActivities]=useState(null)
  const [Amenities , setAmenities]=useState(null)
  const [Food_Cost , setFood_Cost]=useState(null)
  const [selectedPaymentMethod , setselectedPaymentMethod]=useState(null)
  const [Advance_payment , setAdvance_payment]=useState(null)



  const handlePrint = () => {
    const printWindow = window.open();

    

    const content = (

      <html>
        <head>
          <title>Invoice</title>
          {/* <link rel="stylesheet" type="text/css" href="printstyle.css" /> */}
          <style>

          </style>
        </head>
        <body style={{ page: 'A4' }}>
          <div className="printable-content" style={{border:'2px solid black', padding:"10px",height:"95vh"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>

              <img style={{ width: '80%', height: '80%' }} src="king_logo.png" alt='not found' />
              </div>
              <div style={{border:"1px solid black", marginTop:"3%", borderRadius:'10px', width:"200px", height:"80px"}}>
                  <p style={{textAlign:'center'}}>Invoice No: 1345</p>
                  <p style={{textAlign:'center'}}>Date: 13/05/2023</p>
              </div>
              
            
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div >
              <h2 style={{color:'#7F0707'}}>Kingfisher Jungle Stay</h2>
              <h3 style={{marginTop:"-20px"}} class="self-center text-2xl font-bold">Dandeli</h3>
              <h3 style={{marginTop:"-20px"}} class="self-center text-2xl font-bold">GST Nubmber</h3>
              <h4 style={{marginTop:"-20px"}} class="self-center text-2xl ">Contact No :</h4>
                SKINGFISHER JUNGLE STAY  <br />
                BAMANGI, RESORT SY. NO 63,  <br />
                1, Dandeli, Karnataka 581325 <br />

              </div>

              <div >
              <h2>Bill to</h2>
              <h3 style={{marginTop:"-20px"}}>Sami Badami <span style={{opacity:"50%"}}>+4 Persons</span></h3>
              <h4 style={{marginTop:"-20px",opacity:"50%"}}>Gst 74859632</h4>
              <h4 style={{marginTop:"-20px",opacity:"50%"}}>Contact Details</h4>
                
              </div>

            </div>

          


            <hr style={{ border: '1px solid black' }} />

            <div style={{ border:'1px solid black', borderRadius:'5px', marginTop:"10%" }}>
            
              <div>
              <table style={{width:"100%"}}>
                <thead>

                <tr>
                  <th>S NO</th>
                  <th style={{width:"70%", textAlign:'start'}}>Description</th>
                  <th>Amount</th>
                  
                </tr>
                
                </thead>
            

                <tr style={{height:'50px'}}>
                  <th>01</th>
                  <th style={{width:"70%",textAlign:'start'}}>Package Charges</th>
                  <th>50</th>
                </tr>
              
                <tr style={{height:'50px'}}>
                  <th>02</th>
                  <th style={{width:"70%",textAlign:'start'}}>Activities</th>
                  <th>94</th>
                </tr>

                <tr style={{height:'50px'}}>
                  <th>03</th>
                  <th style={{width:"70%",textAlign:'start'}}>Food & Beverages </th>
                  <th>94</th>
                </tr>
              </table>
              </div>
            </div>

            <div style={{ border:'1px solid black', borderRadius:'5px',marginTop:'5%' }}>
                <h3 style={{color:'#7F0707'}}>Amount Payable <span style={{opacity:'50%',color:'black',marginLeft:'60%'}}>Sub Total</span><span style={{color:'black',marginLeft:"5px"}}>2,197</span></h3>
                <h3 ><span style={{opacity:'50%',color:'black',marginLeft:'77%'}}>Grand Total</span><span style={{color:'black',marginLeft:"5px"}}>2,197</span></h3>

            </div>

            <div>
            <h3>Payment Details <span style={{marginLeft:'70%'}}>Cash</span></h3>
            {/* <h3>Bank Details/Other</h3> */}
            </div>
          </div>
        </body>
      </html>
    );

    printWindow.document.open();
    printWindow.document.write(ReactDOMServer.renderToStaticMarkup(content));
    printWindow.document.close();

    printWindow.print();
  };
  

  return (
    <div className='mb-5'>
      <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
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
            <div>
                <p class='font-bold'>Date</p>
            </div>
          <p  class="block   md:p-0 text-gray-900 rounded text-2xl md:hover:bg-transparent md:border-0  dark:text-white">08/01/2024</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-2">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./book.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2">Customer Details  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>
<div className=' container d-flex justify-content-start'>
    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px'}}>Name</span>
    
    <input type='text' value={cName} onChange={(e)=>setcName(e.target.value)} style={{width:'50%', border:'1px solid black' ,borderRadius:'10px'}}/>

    <span  style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>Persons</span>
    
    <input type='text' value={Persons} onChange={(e)=>setPersons(e.target.value)} style={{width:'20%', border:'1px solid black' ,borderRadius:'10px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 30px', borderRadius:'17px', marginRight:'12px'}}>Contact</span>
    
    <input type='text' value={Contact} onChange={(e)=>setContact(e.target.value)} style={{width:'50%', border:'1px solid black' ,borderRadius:'10px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'21px',marginLeft:'15px'}}>Nights</span>
    
    <input type='text' value={Nights} onChange={(e)=>setNights(e.target.value)} style={{width:'10%', border:'1px solid black' ,borderRadius:'10px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 28px', borderRadius:'17px', marginRight:'12px'}}>Check In</span>
    
    <input type='date' value={Check_In} onChange={(e)=>setCheck_In(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px',padding:"2px"}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>Check out</span>
    
    <input type='date' value={Check_out} onChange={(e)=>setCheck_out(e.target.value)} style={{width:'19%', border:'1px solid black' ,borderRadius:'10px',padding:"2px"}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>GST</span>
    
    <input type='text' value={GST} onChange={(e)=>setGST(e.target.value)} style={{width:'19%', border:'1px solid black' ,borderRadius:'10px'}}/>
</div>

<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto mt-5 mb-4">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./man.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2"> Packages & Activities  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>

<div className=' container d-flex justify-content-start '>
    <span style={{background:'#F5DEC399' , padding:'6px 27px', borderRadius:'17px', marginRight:'15px'}}>Activities</span>
    
    <input type='text' value={Activities} onChange={(e)=>setActivities(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 30px', borderRadius:'14px', marginRight:'15px',marginLeft:'15px'}}>Amenities</span>
    
    <input type='text' value={Amenities} onChange={(e)=>setAmenities(e.target.value)} style={{width:'20%', border:'1px solid black' ,borderRadius:'10px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 24px', borderRadius:'15px', marginRight:'15px'}}>Food Cost</span>
    
    <input type='text' value={Food_Cost} onChange={(e)=>setFood_Cost(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px'}}/>

</div>

<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-2 mt-5 mb-4">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./payment.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2"> Select Payment  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>
<div className=' container d-flex justify-content-between '>
    
    
    <input type='radio' checked={selectedPaymentMethod === 'Phonepe'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Phonepe' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'5px'}}/>
    <span style={{ fontSize:'30px',color:"#6739B7", marginLeft:'-42%'}}>< SiPhonepe /></span>

    
    <input type='radio' checked={selectedPaymentMethod === 'Cash'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Cash' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'-35%'}}/>
    <span style={{marginLeft:'-42%'}} >Cash</span>

    
    <input type='radio' checked={selectedPaymentMethod === 'Card'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Card' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'-35%'}}/>
    <span style={{marginLeft:'-42%'}} >Card</span>


    

    <input type='radio' checked={selectedPaymentMethod === 'Advance_Payment'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Advance_Payment' style={{width:'4%', border:'1px solid black' ,borderRadius:'10px'}}/>
    <span style={{marginLeft:'-42%'}} >Advance Payment</span>
    
</div>

<div className='container mt-5 d-flex justify-content-end'>
{
      selectedPaymentMethod === 'Advance_Payment'   && (
        <>
        <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px'}}>Enter Amount</span>
        <input value={Advance_payment} onChange={(e)=>setAdvance_payment(e.target.value)} type='text' style={{width:'18%', border:'1px solid black' ,borderRadius:'10px'}}/>
        </>
      )
    }
</div>

<div className='container mt-5'>

<button className='btn' onClick={handlePrint} style={{background:'#7F0707', color:'white'}}>Generate Bill</button>
</div>




    </div>
  )
}

export default Billing
