import CategoeyCart from "./CategoeyCart";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "./img/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "./img/category__2.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "./img/category__3.webp",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "./img/category__4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "./img/category__5.webp",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "7 Products",
    img: "./img/category__6.webp",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "5 Products",
    img: "./img/category__7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "./img/category__1.webp",
  },
];

const Categoery = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((ele) => (
          <CategoeyCart
            key={ele.id}
            img={ele.img}
            name={ele.name}
            count={ele.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Categoery;
