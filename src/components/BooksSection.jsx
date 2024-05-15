import React from 'react'
import { Link } from 'react-router-dom'

const BooksSection = ({data}) => {
  console.log(data)
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {
        data &&
        data.map((item,index)=>(
          <div className="" style={{width:"200px",height:"350px",backgroundColor:"yellow"}}>
            <div>
              <img
              style={{width:"200px",height:"210px"}}
              className="img-fluid"
              src={item.image}
              alt="/"
              />
              </div>
          <h6 style={{fontSize:"15px"}} className="text-yello p-2">{item.bookname. slice(0.50)}.... </h6>

          <p className="m-0 px-2">Price: {item.price} </p>
          <div  className="d-flex justify-content-around align-items-center  my-2">
            <Link className="btn btn-primary" to="/updateBooks">UPDATE</Link>
            <button className="btn btn-danger">delete</button>{""}
            </div>
          </div>
          
        ))
      }
      
    </div>
  )
}

export default BooksSection
