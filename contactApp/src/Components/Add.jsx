import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addApi } from "../Services/allApi";
import { toast } from "react-toastify";


function Add({resp}) {
  const [modalShow, setModalShow] = useState(false);
  const[contact,setContact]=useState({cname:"",number:""})

  const handleAdd=async()=>{
    const {cname,number}=contact
    if(!cname||!number){
        toast.warning("Enter Name and Phone Number!!")
    }else{
        const res=await addApi(contact)
        if(res.status==201){
            console.log(res)
            resp(res)
            toast.success("Contact Added!!")
            setModalShow(false)
        }
    }
  }

  return (
    <>
      <button
        className="btn btn-primary border border-light text-light"
        style={{ right: "40px", bottom: "60px", position: "fixed" }}
        onClick={() => setModalShow(true)}
      >
        <b>Add Contact</b> <i className="fa-solid fa-plus" />
      </button>



      <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder="Name" onChange={(e)=>setContact({...contact,cname:e.target.value})} className="form-control"/>
        <input type="number" placeholder="Phone Number" onChange={(e)=>setContact({...contact,number:e.target.value})} className="form-control mt-3"/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={()=>{setModalShow(false)}}>Close</Button>
        <Button variant="outline-info" onClick={handleAdd}>Add</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default Add;
