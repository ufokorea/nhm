import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductCard({item}) {
    const navigate = useNavigate();
    const showDetail =() => {
        navigate(`/product/${item.id}`);
    }
  return (
    <div className="card" onClick={showDetail}>
      <img width={300} src={item?.img} />
      <div>   {item?.choice == true ? "abcdedfd" : ""}  </div>
      <div>      {item?.title}      </div>
      <div>{item?.price}원       </div>
      <div>         {item?.new == true ? "신제품" : ""}       </div>
    </div>
  )
}

export default ProductCard
