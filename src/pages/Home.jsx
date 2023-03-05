import React from "react";
import Cards from "../component/Cards";
import { nanoid } from "nanoid";

const Home = ({basket, setBasket, data}) => {
  return (
    <div className="card-parent">
      {data?.map((item) => (
        <Cards key={nanoid()} {...item} basket={basket} setBasket={setBasket} data={data} />
      ))}
    </div>
  );
};

export default Home;
