import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <nav className=" flex justify-between py-[20px] px-[56px] items-center ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex text-white space-x-[32px] text-[16px] uppercase">
          <li>Home</li>
          <li>Features</li>
          <li>Property</li>
          <li>Agent</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <button className=" border-[1px] border-white py-[12px] px-[32px] rounded-[48px] text-white text-[16px] leading-[140%]">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Header;
