import React from 'react'
import axios from "axios"
import { useEffect,  } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

const ViewDetailBooks = () => {
    const [Data,setData]=useState()
    const {id}=useParams
    
   useEffect(()=>{
        const fetchBooks =async()=>{
            await axios
            .get(`http://localhost:1000/api/v1/getBooks/:id"${id}`)
            .then((res)=>setData(res.data.books))
        }
        fetchBooks()
    })

  return (
    <div>
      
    </div>
  )
}

export default ViewDetailBooks
