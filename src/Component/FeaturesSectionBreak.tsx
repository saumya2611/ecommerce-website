import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "./img/product__5.webp",
    name: "Fresh Tomato",
    price: "$400",
  },
  {
    id: 1,
    img: "./img/product__2.webp",
    name: "Crunchy Crisps",
    price: "$300",
  },
  {
    id: 2,
    img: "./img/product__3.webp",
    name: "Jewel Cranberries",
    price: "$200",
  },
  {
    id: 3,
    img: "./img/product__4.webp",
    name: "Almond Organic",
    price: "$100",
  },
];

const FeaturesSectionBreak = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy Fresh quality breakfast online from big basket stop near you.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="features_btn">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600  hover:text-accent">Snacks </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 pt-8 pb-5 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="./img/feature__2.webp"
            alt="banner"
          />
        </div>
        {data.map((ele) => (
          <ProductCard
            key={ele.id}
            img={ele.img}
            name={ele.name}
            price={ele.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSectionBreak;
