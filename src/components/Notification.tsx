const Notification = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <img
          className="w-full h-[300px] md:h-[400px] lg:h-[579px] object-cover"
          src="https://images.unsplash.com/photo-1534655610770-dd69616f05ff?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Notification background"
        />
      </div>
      <div className="order-1 lg:order-2 bg-[#202020] px-6 py-12 md:px-12 lg:px-[56px] lg:pl-[104px] flex justify-center items-center">
        <div className="w-full max-w-[500px] lg:max-w-none">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-[120%] uppercase text-white pb-4 md:pb-6 lg:pb-[24px]">
            Get Notifications For Every Update
          </h1>
          <p className="text-sm md:text-base lg:text-[16px] text-[#9F9F9F] leading-[140%] uppercase pb-6 md:pb-8 lg:pb-[44px]">
            Enter your email and join us to get the latest information and
            promotions from us
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-6 py-4 md:py-[24px] rounded-[48px] bg-[#FFFFFF] opacity-25 
                placeholder:text-sm md:placeholder:text-[16px] placeholder:uppercase"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button
                className="bg-white text-black rounded-[56px] text-xs md:text-[14px] 
                font-medium uppercase px-4 md:px-[32px] py-2 md:py-[12px] whitespace-nowrap"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
