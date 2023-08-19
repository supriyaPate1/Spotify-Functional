import React from 'react'
import './navbarlogo.css'
export default function Navbarlogo() {
  return (
  <>
   <div class="topnavbar">
         <div className='leftnav'>
            <img src='https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png' ></img>
         </div>
         <div  className='rightnav'>
            <span class="active" >Premium</span>
         </div>
         <div  className='rightnav'>
            <span class="active" >Support</span>
         </div>
         <div  className='rightnav'>
            <span class="active" >Download</span>
         </div>
         <div  className='rightnav'>
           <p id='line'>|</p>
         </div>
        <div  className='rightnav'>
           <span class="active" >Sign up</span>
        </div>
        <div  className='rightnav'>
           <span class="active" >Log in</span>
        </div>
           
        </div>
  </>
  )
}
