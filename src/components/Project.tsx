const Project = () => {
  return (
    <div className="bg-[#111010] pt-16 pb-16 md:pt-20 px-4 md:px-14 lg:px-[56px]">
      <div>
        <h1 className="text-[16px] text-[#9F9F9F] uppercase pb-2 md:pb-[8px]">
          our project
        </h1>
        <p className="text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-[120%] text-white uppercase font-medium">
          Every solution is created to meet your home's requirements, and we are
          here to help.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-10 lg:gap-[40px] pt-12 md:pt-[72px]">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-[24px]">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1676625176020-3bbb1c0adea1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Homestay Indonesia"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                homestay, indonesia
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1525953776754-6c4b7ee655ab?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Law Villa Turkey"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                law villa, turkey
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>

          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1713198578917-ff3e8b64858b?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Town One Germany"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                town one, germany
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-[24px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610365210421-cf4038452f6d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Studio Design Indonesia"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                studio design, indonesia
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1719258833451-1e47c1498467?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Dompy Town USA"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                dompy town, usa
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1592056400494-fae00d745d27?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover"
              alt="Housecamp France"
            />
            <div className="flex justify-between pt-4 md:pt-[16px]">
              <h1 className="text-[14px] md:text-[16px] text-white uppercase">
                housecamp, france
              </h1>
              <h2 className="text-[14px] md:text-[16px] text-white uppercase">
                2023
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
