import  { useState } from 'react'
import "./AddBooks.css"
import axios from 'axios'
import React from 'react'

const AddBooks = () => {
    const [Data,setData]=useState({
        bookname:"",
        description:"",
         author:"",
         image:"",
        price:"",
})
const change =(e)=>{
    const {name,value}=e.target
    setData({...Data,[name]:value})
}

const submit = async (e)=>{
    e.preventDefault()
    await axios
    .post("https://backend-z358.onrender.com/api/v1/add",Data)
            .then((res)=> alert(res.data.message))
        

}
 console.log(Data)
    return (
    
    
     < div className="AddBooks-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center "> 
     <div className="row container">
      <div className="col-lg-6 d-flex justify-content-center align-items-center start flex-column"
      style={{height:"91.5vh"}}>
<div className=  "container  bg p-3 ">
<div className="mb-0">

  <label for="exampleFormControlInput1" className="form-label">BookName</label>
  <input type="text" onChange={change} className="form-control" id="exampleFormControlInput1" placeholder="Enter BookName"
  name="bookname"
  
  />
</div>

<div className="mb-0">
  <label for="exampleFormControlInput1" className="form-label">Description</label>
  <input type="text-yellow" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Description of Book"
  name="description"
  onChange={change}
  />
</div>

<div className="mb-0">
  <label for="exampleFormControlInput1" className="form-label">Author</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the name of Author"
  name="author"
  onChange={change}
  />
</div>

<div className="mb-0">
  <label for="exampleFormControlInput1" className="form-label">Image</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of Image"
  name="image"
  onChange={change}
/>
</div>

<div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Price
  </label>
  <input type="number"
   className="form-control" 
   id="exampleFormControlInput1"
   placeholder="Enter price of Book"
   name="price"
  onChange={change}
  />
</div>

<button className='btn btn-success'onClick={submit} >submit</button> 
    </div>
  </div>
  
  </div>
  </div>

      
  )
}

export default AddBooks