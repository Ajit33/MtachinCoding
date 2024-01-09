import React, { useState } from 'react'
import data from './data';
import './style.css';
const Accoridian = () => {
    const [select,setselect]=useState(null);

    const [eneableMultiSelection,setenableMultiSelection]=useState(false);
    const [multiple,setMultiple]=useState([]);


    const handelsingleclickselection=(getCurrnetId )=>{
       setselect(getCurrnetId===select?null:getCurrnetId);
    }
    const handelMultiSelection=(getCurrnetId)=>{
       let copymultipleId=[...multiple];
       const findInedxOfCurrentId=copymultipleId.indexOf(getCurrnetId)
       if(findInedxOfCurrentId===-1)copymultipleId.push(getCurrnetId);
       else{
          copymultipleId.splice(findInedxOfCurrentId,1)
       }
       setMultiple(copymultipleId)
    }
  return (
    <div className='wrapper'>
    const [eneableMultiSelection,setenableMultiSelection]=useState(false);
        <button onClick={()=>setenableMultiSelection(!eneableMultiSelection)}>Enaable multi Selection</button>
        <div className='accordian'>
           {
            data && data.length>0 ? 
            data.map((dataitems)=>(
                <div className="items">
                    <div onClick={eneableMultiSelection?()=>handelMultiSelection(dataitems.id) :()=>handelsingleclickselection(dataitems.id)} className="title">
                        <h3>{dataitems.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        select===dataitems.id || multiple.indexOf(dataitems.id)!==-1 ?
                        <div className="content">{dataitems.answer}</div>
                        :null
                    }
                </div>
            ))
            : <div> NO data found</div>
           }
        </div>
    </div>
  )
}

export default Accoridian;