import { nanoid } from "nanoid";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";

export const products = [
  {
    id: nanoid(),
    product: "Hoodie",
    price: 10,
    image: image1,
  },
  {
    id: nanoid(),
    product: "Shoes",
    price: 10,
    image: image2,
  },
  {
    id: nanoid(),
    product: "blouse",
    price: 10,
    image: image3,
  },
  {
    id: nanoid(),
    product: "Jacket",
    price: 10,
    image: image4,
  },
  {
    id: nanoid(),
    product: "Hat",
    price: 10,
    image: image5,
  }
];
