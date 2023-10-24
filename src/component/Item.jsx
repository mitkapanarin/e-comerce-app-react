import React from "react";

const Item = ({id, product, price, image, desc, basket, setBasket}) => {
  const removeItem = ()=>{
    const filterData = basket?.filter(item=>item.id !==id)
    setBasket(filterData)
  }
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product}</h5>
            <p> {desc}</p>
            <div className="">
              <p>$ {price}</p>
              <button onClick={removeItem} className="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
