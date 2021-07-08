import React from 'react'
import {Button} from 'react-bootstrap'
import './contact.css'

const Forms=()=>{
    return<div style={{ width: '85%',height:'auto', margin: 'auto' }}>
<section className="text-center bygga-parent equip-parent py-5">
                <span className="back-border bygga-text-heading fs-4 fw-bold text-muted text-capitalize">
                  Kontakta Oss
                    </span>
            </section> 

<div class="md d-flex flex-row bd-highlight justify-content-center">
  <div  class="formpage p-5 bd-highlight d-flex justify-content-center" >

  <form className="form">
    <input class="input rounded-pill" placeholder=" First Name" />
  
   
    <input class="input rounded-pill" placeholder=" Last Name" />
    <br/> <br/>

    <input class="input rounded-pill " placeholder=" E-mail Address" />
    
  
  <input class="input rounded-pill" placeholder=" Phone Number"/>
  
  {/* <br/>
  <input placeholder="  How can we help you?"  style={{width:'80%', height:'30vh', borderColor:'red',  marginTop:'3%', borderRadius:'5%'}}/>
  <br/> */}
  <div class="form-group form bd-highlight d-flex justify-content-center m-auto">
    
    <textarea class="form-control" style={{borderColor:'red',  marginTop:'3%', borderRadius:'5%'}} placeholder="  How can we help you?"  id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <br/>
  <Button style={{marginTop:'1%'}} variant="primary">Send</Button>
  </form>
  
  </div>
  <div className="usb"  >
    
  <h2 style={{paddingTop:'2%', textAlign:'center'}}>Contact with us</h2>
  </div>
</div>
</div>
}

export default Forms;