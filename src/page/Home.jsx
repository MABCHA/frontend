import React from 'react'
 import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center ">
     <div className="row container">
      <div className="col-lg-6 d-flex justify-content-center align-items-center start flex-column"
      style={{height:"91.5vh"}}>
        <h2 style={{fontSize:"88px"}}>BOOK STORE </h2>
        <h3 style={{fontSize:"50px"}}>FOR YOU </h3>
        <p className="mb-0"style={{color:"silver"}} >Check Books From Here</p>
        <button style={{padding:"0.2px 0.2px",border:"2px solid"}}><Link to="/Books" className=" bg-dark text-white viewBook my-2">View Books</Link></button>
      </div>
      <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
      style={{height:"91.5vh"}}
      > 
      <img
      className="img-fluid homeimg"
      src="https://th.bing.com/th/id/OIP.X-UG8PNMVK7DtAfZnUOMjAHaJ4?w=162&h=216&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      alt="/"
      />

      </div>
      </div>
      </div>
  )
}

export default Home