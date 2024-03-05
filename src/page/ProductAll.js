import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productlist, setProductlist] = useState([]);
    const [query,setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery=query.get('q') || "";
        let url =`https://my-json-server.typicode.com/ufokorea/nhm/products?q=${searchQuery}`        
        // let url =`http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductlist(data);
    };

    useEffect(()=> {
        getProducts();
    },[query]);

  return (
    <div>
        <Container>
            <Row>
                {productlist.map((menu) => (
                    <Col lg={3}> <ProductCard item={menu}/></Col>
                ))}
                
            </Row>
        </Container>
           
    </div>
  )
}

export default ProductAll
