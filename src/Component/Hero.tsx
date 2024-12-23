import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8 	">
      <div className="grid xl:grid-cols-3 xl:grid-row-2  gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:-row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="./img/hero__1.webp"
            alt="hero img"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className="flex bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-2 px-3 py-1 text-[14px] sm:px-6 sm:py-3  sm:text-[16px] lg:px-6 lg:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              className="w-full  object-cover rounded-lg"
              src="./img/hero__2.webp"
              alt="hero img"
            />
            <div className="absolute max-w-[470px] ml-8 sm:ml-16  top-[50%] -translate-y-[50%]">
              <p className="text-2xl font-bold sm:text-[50px] md:text-[42px] xl:text-xl ">
                Best Yummy Pizza
              </p>

              <p className="text-gray-500 sm:text-[25px] lg:text-[18px] text-md pt-5 sm:pt-5">
                Starting At
              </p>
              <div className="font-medium text-red-600 text-xl sm:text-3xl sm:pb-8 pt-2">
                $25
              </div>
              <div className="flex bg-accent hover:bg-accentDark text-white rounded-full w-fit items-center gap-1 px-3 py-1 mt-2 text-[12px] sm:px-6 sm:py-3 sm:text-[16px] lg:px-4 lg:py-2 lg:text-[12px] cursor-pointer">
                Shop Now <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="relative mt-8">
            <img
              className="w-full  object-cover rounded-lg"
              src="./img/hero__3.webp"
              alt="hero img"
            />
            <div className="absolute max-w-[470px] ml-8 sm:ml-16  top-[50%] -translate-y-[50%]">
              <p className="text-2xl font-bold sm:text-[50px] md:text-[42px] xl:text-xl">
                Best Yummy Chips
              </p>

              <p className="text-gray-500 text-md pt-5 sm:pt-5 sm:text-[25px] lg:text-[18px]">
                Starting At
              </p>
              <div className="font-medium text-red-600 text-xl sm:text-3xl sm:pb-8 pt-2">
                $10
              </div>
              <div className="flex bg-accent hover:bg-accentDark text-white rounded-full w-fit items-center gap-1 px-3 py-1 mt-2 text-[12px] sm:px-6 sm:py-3 sm:text-[16px] lg:px-4 lg:py-2 lg:text-[12px] cursor-pointer">
                Shop Now <BsArrowRight />
              </div>
              {/* <p className="text-2xl sm:text-[40px] md:text-[25px] lg:text-[50px]">
                Some text
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
