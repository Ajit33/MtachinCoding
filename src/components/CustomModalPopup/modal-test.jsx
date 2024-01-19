import { useState } from "react";
import Modal from "./modal";
import './modal.css';

const ModalTest=()=>{

    const[showModalPopup,setShowModalPopup]=useState(false);
function heandelToggleModalPopup(){
    setShowModalPopup(!showModalPopup);
}


    return(
        <div>
       <button onClick={heandelToggleModalPopup}>Open</button>
       {
        showModalPopup && <Modal header={"this is our headr"} body={<div>golu is the best</div>} />
       }
        </div>
    )
}
export default ModalTest;