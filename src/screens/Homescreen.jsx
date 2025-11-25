import React from 'react'
import  {Row, Col} from 'react-bootstrap'
import products from '../products' //.. because two folders back in directory
function Homescreen() {
  return (
    <div>
      <h1> These are my products</h1>
      <Row>
         
            {products.map((product) => (
                <div key={product._id}>
                <Col  sm = {12} md={6} lg={4} xl={3}>// for responsive screens
               {product.name } 
                </Col>
                </div>
            ))} //this is a for loop
    
      </Row>
    </div>
  )
}

export default Homescreen
