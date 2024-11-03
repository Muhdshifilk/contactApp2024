import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editApi } from '../Services/allApi';
import { toast } from 'react-toastify';

function Edit({get,resp}) {
    const [modalShow, setModalShow] = useState(false);
    const [contact,setContact]=useState(get)

    const handleEdit=async(id)=>{
        const {cname,number}=contact
        if(!cname||!number){
            toast.warning('Enter Valid Inputs')
        }else{
            const res=await editApi(id,contact)
            console.log(res)
           if(res.status==200){
                resp(res.data)
                setModalShow(false)
                toast.success("Contact Updated!!")
                console.log(contact)
           }
        }
    }

  return (
   <>
        <button className='btn' onClick={()=>setModalShow(true)}><i className="fa-solid fa-pen-to-square" style={{color: "#003899",}} /></button>
    

        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Contact
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" placeholder="Name" defaultValue={get.cname}  onChange={(e)=>setContact({...contact,cname:e.target.value})} className="form-control"/>
            <input type="number" placeholder="Phone Number" defaultValue={get.number}  onChange={(e)=>setContact({...contact,number:e.target.value})} className="form-control mt-3"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>{setModalShow(false)}}>Close</Button>
            <Button variant="outline-info" onClick={()=>handleEdit(get.id)}>Edit</Button>
          </Modal.Footer>
        </Modal>
   </>
  )
}

export default Edit