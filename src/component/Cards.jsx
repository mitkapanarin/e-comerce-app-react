import React from "react";

const Cards = ({ id, product, price, image, data, setData, basket, setBasket }) => {

  const addProduct = () => {
    const findProduct = data?.find(item=>item.id === id)
    setBasket([...basket, findProduct])
  };

  const removeProduct = () => {
    const findProduct = basket?.filter(item=>item.id !== id)
    setBasket(findProduct)
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={product} />
      <div className="card-body">
        <h5 className="card-title">{product}</h5>
        <p>{price}</p>
        {basket.find((item) => item.id === id) ? (
          <button onClick={removeProduct} className="btn btn-danger">
            Remove
          </button>
        ) : (
          <button onClick={addProduct} className="btn btn-success">
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
