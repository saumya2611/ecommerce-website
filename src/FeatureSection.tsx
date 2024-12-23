import {
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Curbside Picup",
    icon: <LiaGiftSolid />,
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
  },
];

const FeatureSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid place-items-center gap-4 md:place-items-center md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item) => {
          return (
            <FeatureCard key={item.title} title={item.title} icon={item.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
