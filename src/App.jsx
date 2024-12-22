import './App.css'
import React from 'react'
import './assets/fonts.css'
import Logo from './assets/images/Logo.svg'
import button from "./assets/images/button.svg"
import oracle from "./assets/images/oracle.svg"
import morpheus from "./assets/images/morpheus.svg"
import samsung from "./assets/images/samsung.svg"
import monday from "./assets/images/monday.svg"
import segment from "./assets/images/segment.svg"
import lamp from "./assets/images/lamp.svg"
import pencil from "./assets/images/pencil.svg"
import message from "./assets/images/message-oram.svg"
import back from "./assets/images/vector.png"



function App() {
  return (
    <>
     <div className='header'>
      <div className="container header-container">
        <div><img src={Logo} alt="" /></div>
        <ul className="nav-list">
          <li className="nav-item">Product</li>
          <li className="nav-item">Template</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Pricing</li>
        </ul>
        <div className="register">
         <a href="#" className="sign">Sign in</a>
         <a href="#" className="start">Start Free</a>
        </div>
      </div>
    </div>

    <main className="main">
<div className="container main-container">
<div className="main-left">
<h1>Managing business payments has never been easier</h1>
<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
<div className="buttons">
  <a href="#" className="our-process">Our Process</a>
  <span><img src={button} width={60} height={60} alt="" /><a className='works'>See How It Works</a></span>
</div>
  </div>

      <div className="main-right">
        <h3>Get Started for Free</h3>
        <input type="email" name="" id="email" placeholder='Email Addres'/>
        <input type="text" name="" id="text" placeholder='Password'/>
        <button className='btn'>GET STARTED</button>
      </div>
</div>
    </main>

    <div className="trusted">
      <div className="container trusted-container">
        <h2>Trusted By Over 100+ Startups and freelance business</h2>
        <div className="logos">
<img src={oracle} alt="" width={137} height={17} />
<img src={morpheus} alt="" width={137} height={28} />
<img src={samsung} alt="" width={137} height={21} />
<img src={monday} alt="" width={137} height={24} />
<img src={segment} alt="" width={137} height={28} />
        </div>
      </div>
    </div>

    <div className="neglected">
      <h3>Believing neglected so so allowance</h3>
      <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
       <h4>We so opinion friends me message as delight.</h4>
    </div>

    <div className="numbers">
      <div className="container numbers-container">
<div className="lamp-card">
  <img src={lamp} width={64} height={64} alt="" />
  <h3>Led Ask Possible Mistress</h3>
  <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
</div>

<div className="pencil-card">
  <img src={pencil} width={64} height={64} alt="" />
  <h3>Elegance Eat Likewise</h3>
  <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. </p>
</div>

<div className="message-card">
  <img src={message} width={64} height={64} alt="" />
  <h3>Message Oram Nothing</h3>
  <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
</div>

      </div>
    </div>

    <div className="border">
      <div className="container border-container">
        <h2>Track your crytpo portfolio on the best way possible</h2>
        <h3>Check It Out</h3>
      </div>
    </div>
    </>

    
   
  )
}

export default App