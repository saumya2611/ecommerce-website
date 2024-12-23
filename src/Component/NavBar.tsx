import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadget from "./CartCountBadget";

const NavBar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between item-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#F2F3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex gap-2">
          <div className="border rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <AiOutlineUser className="text-[22px]" />
          </div>
          <div className="border rounded-full w-[50px] h-[50px] flex justify-center items-center relative">
            <AiOutlineShoppingCart className="text-[22px]" />
            <CartCountBadget size="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
