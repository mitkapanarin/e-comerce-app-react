import React, {Fragment} from "react";
import Item from "../component/Item";

const Checkout = ({ basket, setBasket }) => {
  const totalBill = basket.map((item) => item.price).reduce((a, b) => a + b, 0);

  return (
    <div className="">
      {totalBill === 0 ? (
        <div className="text-center">Nothing in Cart</div>
      ) : (
        <>
          <h3 className="text-center">total: $ {totalBill} </h3>
          <div className="row">
            <div className="col-4">
              {basket.map((item) => (
                <Item {...item} basket={basket} setBasket={setBasket} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
