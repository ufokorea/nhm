import React,{useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let {id} = useParams();
    const[product,setProduct] = useState(null);

    const getPorductDetail = async () => {
        // let url=`http://localhost:5000/products/${id}`
        let url=`https://my-json-server.typicode.com/ufokorea/nhm/products/${id}`        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProduct(data);
    }

    useEffect(()=> {
        getPorductDetail();
    },[])

  return (
    <Container>
        <Row>
            <Col>
            <img src={product?.img} />
            </Col> 
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>                
            </Col>
        </Row>
      
    </Container>
  )
}

export default ProductDetail
