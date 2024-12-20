import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111010] p-6 md:p-10 lg:p-[56px]">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-[120%] font-medium text-white uppercase pb-8 lg:pb-[48px]">
            home2stay@gmail.com
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 pb-8 lg:pb-[46px]">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-[24px]">
            {/* Phone Numbers */}
            <div>
              <h1 className="text-[14px] md:text-[16px] uppercase leading-[140%] text-white pb-3 md:pb-[16px]">
                Number Phone
              </h1>
              <p className="text-[14px] md:text-[16px] uppercase leading-[140%] text-[#686868]">
                (613)-9811-2476
                <br />
                (613)-6354-7238
              </p>
            </div>

            {/* Address */}
            <div>
              <h1 className="text-[14px] md:text-[16px] uppercase leading-[140%] text-white pb-3 md:pb-[16px]">
                Address
              </h1>
              <p className="text-[14px] md:text-[16px] uppercase leading-[140%] text-[#686868]">
                Number 3891 Ranchview Dr. Richardson,
                <br />
                California 62639, Amerika Serikat Country
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-auto">
            <h1 className="text-white text-[14px] md:text-[16px] leading-[140%] uppercase">
              Social Media
            </h1>
            <div className="flex space-x-[8px] pt-3 md:pt-[16px] justify-center md:justify-start">
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex justify-center items-center bg-[#232323] rounded-full">
                <img src={facebook} alt="Facebook" className="w-5 md:w-6" />
              </div>
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex justify-center items-center bg-[#232323] rounded-full">
                <img src={twitter} alt="Twitter" className="w-5 md:w-6" />
              </div>
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex justify-center items-center bg-[#232323] rounded-full">
                <img src={instagram} alt="Instagram" className="w-5 md:w-6" />
              </div>
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex justify-center items-center bg-[#232323] rounded-full">
                <img src={youtube} alt="YouTube" className="w-5 md:w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#202020] py-4 md:py-[16px]">
        <h1 className="text-center text-[#9F9F9F] uppercase text-[12px] md:text-[14px]">
          home2stay © 2025-2026, All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
