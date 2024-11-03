import React from 'react'
import {Row,Col} from 'react-bootstrap'

function Footer() {
  return (
    <>
        <div className='bg-dark text-light container-fluid'>
            <Row className='p-3'>
                <Col sm={12} md={4}>
                    <h5>Do Contact</h5>
                    <p>Do Contact is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit quis non nemo quidem minima quibusdam mollitia repudiandae cumque voluptate, iure magni tenetur, maxime dolorum amet temporibus consequatur aliquam vitae!</p>
                </Col>
                <Col sm={12} md={8}>
                    <h5>Help</h5>
                    <p>Do Contact is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reprehenderit quis non nemo quidem minima quibusdam mollitia repudiandae cumque voluptate, iure magni tenetur, maxime dolorum amet temporibus consequatur aliquam vitae!</p>
                    <h5>Feedback</h5>
                    <div className='d-flex'>
                        <input type="text" className='me-2 form-control'/>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} className='text-center'>Do Contact©All Rights Reserved</Col>
            </Row>
        </div>
    </>
  )
}

export default Footer