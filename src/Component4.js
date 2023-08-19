import './component4.css'

function Compo4() {
    return (
      <>
      <div class="tophe">
        <div>
            <h1>
               Pick your Premium
            </h1>
            <p>Listen without Limits on your phone, speaker, and other devices.</p>
        </div>
        
    <div class="row">
            <div class="upi">
                <img src="upi payment.png"/>
               
            </div>
            <div class="column">
              <button class="btn2">one-time plans available</button>
              <h3>Mini</h3>
              <p>From Rs.7/day</p>
              <p>1 account</p>
              <br></br>
              <br></br>
              <hr/>
              <ul>
                <li>Ad-free music listening on mobile</li>
                <li>Group Session</li>
                <li>Download 30 songs on 1 mobile device</li>
              </ul>
              <br></br>
              <button class="viewP">VIEW PLANS</button>
              <p id="terms"><a href="lm">Terms and condition apply.</a></p>
              {/* <br></br> */}
            </div>

            <div class="column">
              <button class="btn1">1 month free</button>
              <button  class="btn2">one-time plans available</button>
              <h3>Individual</h3>
              <p>From Rs.119/per month after offer period</p>
              <p>1 account</p>
              <hr/>
              <ul>
                <li>Ad-free music listening</li>
                <li>Group Session</li>
                <li>Download 10k songs/device on 5 devices</li>
              </ul>
              <br></br>
              <br></br>
              <button class="viewP">VIEW PLANS</button>
              <p id="terms" ><a href="lm">Terms and condition apply.</a>
                1 month free not available for users who have already tried premium.</p> 
            </div>
            <div class="column">
              <button  class="btn1">1 month free</button>
              <button class="btn2">one-time plans available</button>
              <h3>Duo</h3>
              <p>From Rs.149/per month after offer period</p>
              <p>2 account</p>
              <hr/>
              <ul>
                <li>For couples who live together</li>
                <li>Ad-free music listening</li>
                <li>Group Session</li>
                <li>Download 10k songs/device, on 5 devices per account</li>
              </ul> 
              <br></br>    
              <button class="viewP">VIEW PLANS</button>
              <p id="terms" ><a href="lm"> Terms and condition apply.</a>
               1 month free not available for users who have already tried premium.</p> 
            </div>
            <div class="column">
              <button class="btn1">1 month free</button>
              <button class="btn2">one-time plans available</button>
              <h3>Family</h3>
              <p>From Rs.179/per month after offer period</p>
              <p>Up to 6 account</p>
              <hr/>
              <ul>
                <li>For family who live together</li>
                <li>Block explicit music</li>
                <li>Ad-free music listening</li>
                <li>Group Session</li>
                <li>Download 10k songs/device on 5 devices</li>
              </ul>
              <button class="viewP">VIEW PLANS</button>
              <p id="terms" ><a href="lm"> Terms and condition apply.</a>
                1 month free not available for users who have already tried premium.</p> 
            </div>
         </div>
         <div class="stu" >
          <h2>Special discount for eligible students in university</h2>
         <span> <button class="learn">LEARN MORE</button></span>
        </div>                 
     </div>      
     
      </>
  
    );
  }
  
  export default Compo4;