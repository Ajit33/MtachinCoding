import React, { useEffect, useState } from 'react'
import './fetch.css';
const FetchUser = () => {
const [data,setData]=useState("");
const [loading,setLoading]=useState(false);

const fetchdata=async()=>{
   try {
    setLoading(true);
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const result= await res.json();
    setLoading(false);
   console.log(result);
   setData(result);
    
   } catch (error) {
    setLoading(true);
    console.log(error);
    setLoading(false);
   }
}



useEffect(()=>{
 fetchdata();
},[])
  return (
    <div style={{textAlign:'center'}}>
       <civ className='table'>
        <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}>
           <tr  style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th> Address</th>
           </tr>
           <tbody>
            {
                loading ?<div>Loading please wait</div>:
             data.length &&
              data.map((item) => (
                <tr style={{ border: '1px solid #ddd', backgroundColor: 'gray', color: 'white' }}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
       </civ>
    </div>
  )
}

export default FetchUser




