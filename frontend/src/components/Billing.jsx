import React, { useState } from 'react'
import axios from 'axios'
// import { SiPhonepe } from "react-icons/si";
import ReactDOMServer from 'react-dom/server'; // Add this import
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const [Loader ,setloader]=useState(false)
  const [cName , setcName]=useState(null)
  const [Persons , setPersons]=useState(null)
  const [Contact , setContact]=useState(null)
  const [days , setdays]=useState(null)
  const [Check_In , setCheck_In]=useState(null)
  const [Check_out , setCheck_out]=useState(null)
  const [GST , setGST]=useState(null)
  const [Activities , setActivities]=useState(null)
  const [amount , setamount]=useState(null)
  const [Amenities , setAmenities]=useState(null)
  const [Food_Cost , setFood_Cost]=useState(null)
  const [selectedPaymentMethod , setselectedPaymentMethod]=useState(null)
  const [selecteAdvancedPayment , setselecteAdvancedPayment]=useState(false)
  
  const [Advance_payment , setAdvance_payment]=useState(null)
  const [SaveBill , setSaveBill]=useState(0)

  const location = useLocation()

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear()
  let cdate =  dd+ "-" + mm + "-" +yy ;

  const Navigate = useNavigate()

  const logout =()=>{
    localStorage.clear()
    Navigate('/')
}

// const gstAmount = (SaveBill.totalCost) - (SaveBill.grandTotal) 

  const data ={
 customerName:cName,
   
  // customerEmail: Contact,
  customerPhone: Contact,
  totalCustomer: Persons,
  activity: Activities,
  extraAmenity: Amenities,
  foodCost: Food_Cost,
  advancePayment: Advance_payment,
  customerGstNumber: GST,
  checkInDate: Check_In,
  checkOutDate: Check_out,
  totalCost:amount,
  modeOfPayment: selectedPaymentMethod
  }


  const submit=()=>{
    console.log(data)
    setloader(true)
    try {
      axios.post(`http://localhost:8080/bill/save/${amount}/${days}`,data)
      .then((response)=>{
        console.log(response)
        setSaveBill(response.data.data)
      
      })
      
    } catch (error) {
      console.log(error)  
    } finally {
      setloader(false)
    }
  }

  React.useEffect(() => {
    if (SaveBill) {
      handlePrint();
    }
  }, [SaveBill]);

  const handleCheckboxChange = () => {
    const confirm = document.getElementById("advance");
    if (confirm) {
      setselecteAdvancedPayment(confirm.checked);
    }
  };




  const handlePrint = () => {
    const printWindow = window.open();

    
    if (printWindow) {
      
    const content = (

      <html>
        <head>
          <title>{SaveBill.invoiceNumber}__{SaveBill.customerName}</title>
          {/* <link rel="stylesheet" type="text/css" href="printstyle.css" /> */}
          <style>

          </style>
        </head>
        <body style={{ page: 'A4' }}>
          <div className="printable-content" style={{border:'2px solid black', padding:"10px",height:"90vh"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>

              <img style={{ width: '80%', height: '80%' }} src="king_logo.png" alt='not found' />
              </div>
              <div style={{border:"1px solid black", marginTop:"3%", borderRadius:'10px', width:"200px", height:"80px"}}>
                  <p style={{textAlign:'center'}}>{SaveBill.invoiceNumber}</p>
                  <p style={{textAlign:'center'}}>{SaveBill.localDate}</p>

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
              <h3 style={{marginTop:"-20px"}}>{SaveBill.customerName}<span style={{opacity:"50%"}}>  + {SaveBill.totalCustomer - 1} Persons</span></h3>
              <h4 style={{marginTop:"-20px",opacity:"50%"}}>{SaveBill.customerGstNumber}</h4>
              <h4 style={{marginTop:"-20px",opacity:"50%"}}>{SaveBill.customerPhone}</h4>
                
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
                  <th>{SaveBill.packageCost}</th>
                </tr>
              
                <tr style={{height:'50px'}}>
                  <th>02</th>
                  <th style={{width:"70%",textAlign:'start'}}>Activities</th>
                  <th>{SaveBill.activity}</th>
                </tr>

                <tr style={{height:'50px'}}>
                  <th>03</th>
                  <th style={{width:"70%",textAlign:'start'}}>Food & Beverages </th>
                  <th>{SaveBill.foodCost}</th>
                </tr>

                <tr style={{height:'50px'}}>
                  <th>04</th>
                  <th style={{width:"70%",textAlign:'start'}}>Amenities </th>
                  <th>{SaveBill.extraAmenity}</th>
                </tr>
              </table>
              </div>
            </div>

            <div style={{ border:'1px solid black', borderRadius:'5px',marginTop:'5%' }}>
                <h3 style={{color:'#7F0707'}}>Amount Payable </h3>
                {/* <h3 ><span style={{opacity:'50%',color:'black'}}>18% Gst</span><span style={{opacity:'50%',color:'black'}}>Sub Total</span><span style={{color:'black',marginLeft:"5px"}}>{SaveBill.totalCost}</span></h3> */}
                
            
                    
                    <h3 ><span style={{opacity:'50%',color:'black'}}>AdvancePayment</span><span style={{color:'black',marginLeft:"70%"}}>{SaveBill.advancePayment !== 'null' ? SaveBill.advancePayment : <p>---</p>}</span></h3>
                  
                  <h3 ><span style={{opacity:'50%',color:'black',marginLeft:'5px'}}>Sub Total</span><span style={{color:'black',marginLeft:"78%"}}>{SaveBill.totalCost}</span></h3>
                
                {/* <h3 ><span style={{opacity:'50%',color:'black'}}>18% Gst</span><span style={{color:'black',marginLeft:"80%"}}>{gstAmount}</span></h3> */}
                <h3 ><span style={{opacity:'50%',color:'black',marginTop:'-20px',marginLeft:'5px'}}>Grand Total</span><span style={{color:'black',marginLeft:"75%"}}>{SaveBill.grandTotal}</span></h3>
                <p style={{opacity:'50%',color:'black',marginLeft:'5px',marginTop:'-20px'}}>GST included</p>
                

            </div>

            <div>
            <h3>Payment Type <span style={{marginLeft:'70%'}}>{SaveBill.modeOfPayment}</span></h3>
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
    }
  };
  

  return (
    <div className='mb-5'>
      <nav class="border-gray-200  dark:bg-gray-800 dark:border-gray-700">
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


<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-2">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./book.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2 mt-3">Customer Details  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>
<div className=' container d-flex justify-content-start'>
    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px'}}>Name</span>
    
    <input type='text' value={cName} onChange={(e)=>setcName(e.target.value)} style={{width:'50%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span  style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>Persons</span>
    
    <input type='text' value={Persons} onChange={(e)=>setPersons(e.target.value)} style={{width:'20%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 30px', borderRadius:'17px', marginRight:'12px'}}>Contact</span>
    
    <input type='text' value={Contact} onChange={(e)=>setContact(e.target.value)} style={{width:'50%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'21px',marginLeft:'15px'}}>Nights</span>
    
    <input type='text' value={days} onChange={(e)=>setdays(e.target.value)} style={{width:'10%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 28px', borderRadius:'17px', marginRight:'12px'}}>Check In</span>
    
    <input type='date' value={Check_In} onChange={(e)=>setCheck_In(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>Check out</span>
    
    <input type='date' value={Check_out} onChange={(e)=>setCheck_out(e.target.value)} style={{width:'19%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px',marginLeft:'15px'}}>GST</span>
    
    <input type='text' value={GST} onChange={(e)=>setGST(e.target.value)} style={{width:'19%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>
</div>

<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto mt-5 mb-4">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./man.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2 mt-3"> Packages & Activities  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>

<div className=' container d-flex justify-content-start '>
    <span style={{background:'#F5DEC399' , padding:'6px 27px', borderRadius:'17px', marginRight:'15px'}}>Activities</span>
    
    <input type='text' value={Activities} onChange={(e)=>setActivities(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 30px', borderRadius:'14px', marginRight:'15px',marginLeft:'15px'}}>Amenities</span>
    
    <input type='text' value={Amenities} onChange={(e)=>setAmenities(e.target.value)} style={{width:'20%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>
</div>

<div className=' container d-flex justify-content-start mt-5'>
    <span style={{background:'#F5DEC399' , padding:'6px 24px', borderRadius:'15px', marginRight:'15px'}}>Food Cost</span>
    
    <input type='text' value={Food_Cost} onChange={(e)=>setFood_Cost(e.target.value)} style={{width:'18%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

    <span style={{background:'#F5DEC399' , padding:'6px 24px', borderRadius:'15px', marginRight:'12px', marginLeft:'15px'}}>Amount Per Head</span>
    
    <input type='text' value={amount} onChange={(e)=>setamount(e.target.value)} style={{width:'17%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>

</div>

<div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-2 mt-5 mb-4">
     <img class="w-10 h-10 rounded shadow-xl px-2.5 py-2.5 ring-1 ring-orange-800 dark:ring-gray-500 " src="./payment.png" alt="king Logo" />   
     <p class=" items-center font-semibold p-2 mt-3"> Select Payment  </p>
      <hr class="w-96 h-0.5  bg-gray-300 border-0"/>
</div>
<div className=' container d-flex justify-content-between '>
    
    
    <input type='radio' checked={selectedPaymentMethod === 'UPI'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='UPI' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'5px'}}/>
    <span style={{ fontSize:'30px',color:"#6739B7", marginLeft:'-42%'}}><img src='Banner15.webp' style={{height:'30px', width:'90px'}} /></span>

    
    <input type='radio' checked={selectedPaymentMethod === 'Cash'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Cash' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'-35%'}}/>
    <span style={{marginLeft:'-42%'}} >Cash</span>

    
    <input type='radio' checked={selectedPaymentMethod === 'Card'} onChange={(e)=>setselectedPaymentMethod(e.target.value)} name='paymentMethod' value='Card' style={{width:'5%', border:'1px solid black' ,borderRadius:'10px',marginLeft:'-35%'}}/>
    <span style={{marginLeft:'-42%'}} >Card</span>


    

    <input type='checkbox' id='advance' onChange={handleCheckboxChange} style={{width:'1%', border:'1px solid black' ,borderRadius:'10px'}}/>
    <span style={{marginLeft:'-42%'}} >Advance Payment</span>
    
</div>

<div className='container mt-5 d-flex justify-content-end'>
{
      selecteAdvancedPayment   && (
        <>
        <span style={{background:'#F5DEC399' , padding:'6px 35px', borderRadius:'17px', marginRight:'15px'}}>Enter Amount</span>
        <input value={Advance_payment} onChange={(e)=>setAdvance_payment(e.target.value)} type='text' style={{width:'18%', border:'1px solid black' ,borderRadius:'10px',padding:'0 5px'}}/>
        </>
      )
    }
</div>

<div className='container mt-5'>

<button className='btn' onClick={submit} style={{background:'#7F0707', color:'white'}} disabled={!selectedPaymentMethod}>Generate Bill</button>
</div>




    </div>
  )
}

export default Billing
