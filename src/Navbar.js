import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import logo from './'

function Navbar1() {
  return (
    <>
    <div className='mainnav'>
        <div class="purpleBox">
            <h2>Get Premium free for 1 month </h2>
            <p>Just Rs 119/month after. Debits and credit card accepted cancel anytime</p>
            <button id='getstart'>Get started</button>
            <button id="bplans">See other plans</button>
            <p id="terms" ><a href="lm"> Terms and condition apply.</a>
        One month free not available for users who have already tried premium.</p> 
        </div>
        <div class="BlackBox">
            <h2>Introducing Premium Mini </h2>
            <p>Rs.7 for 1 day.</p>
            <p>Rs.25 for 1 week.</p>
            <button>Get Mini</button>
            <p id="terms" ><a href="lm">Terms and condition apply.</a></p> 
        </div>
        <div>
           
        </div>
    </div>
        </>

  );
}

export default Navbar1;