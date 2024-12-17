import active from "../assets/active.svg";
import inactive from "../assets/inactive.svg";
import leftarrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

const Hero = () => {
  return (
    <>
      <div className=" pt-[127px] pl-[140px] pr-[566px]">
        <div>
          <h1 className=" text-[18px] text-white pb-[8px]">20/14</h1>
        </div>
        <div>
          <h2 className=" text-[88px] font-medium text-white leading-[90%] pb-[32px]">
            FIND THE PERFECT AND SIMPLE<br></br> - PROPERTIES
          </h2>
        </div>
        <div>
          <p className=" text-white text-[16px] uppercase leading-[140%] pb-[40px]">
            Find a variety of studio apartments of your own, share fantastic
            <br></br>
            living and work spaces, and discover modern properties with<br></br>
            one simple payment fee.
          </p>
        </div>
        <div className=" pb-[239px]">
          <button className=" border-[1px] border-white py-[12px] px-[32px] rounded-[48px] text-white text-[16px] leading-[140%] ">
            Discovery
          </button>
        </div>
      </div>
      <div className=" flex justify-between pb-[34px] pl-[59px] pr-[563px]">
        <div className=" flex items-center text-white">
          <h1 className=" pr-[16px]">01</h1>
          <div className="flex items-center space-x-[7px]">
            <img src={active} alt="active" />
            <img src={inactive} alt="inactive" />
            <img src={inactive} alt="inactive" />
            <img src={inactive} alt="inactive" />
          </div>
        </div>
        <div className=" flex space-x-[4px] text-white">
          <img src={leftarrow} alt="leftarrow" />
          <img src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </>
  );
};

export default Hero;
