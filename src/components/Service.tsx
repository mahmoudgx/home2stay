const Service = () => {
  const serviceCards = [
    {
      title: "high-end nationwide marketing",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt.",
    },
    {
      title: "Controlled development",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt.",
    },
    {
      title: "connection is always on",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt.",
    },
    {
      title: "Local area knowledge",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="pt-8 md:pt-16 lg:pt-20 pb-8 md:pb-16 lg:pb-[72px] px-4 md:px-14 lg:px-[56px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end space-y-6 md:space-y-0">
          <div>
            <h1 className="text-sm md:text-base text-[#686868] uppercase">
              our service
            </h1>
            <h2 className="pt-3 md:pt-4 text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[120%] uppercase font-medium">
              Our top priority is to
              <br className="hidden md:block" /> build comfort for you.
            </h2>
          </div>
          <div className="md:max-w-lg lg:max-w-xl">
            <p className="text-sm md:text-base leading-relaxed text-[#686868] uppercase">
              we always make sure that consumers are happy with our services, we
              continue to strive to create a positive and comfortable
              atmosphere. This serves as our main guide in providing the best.
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="px-4 md:px-14 lg:px-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 md:pb-20 lg:pb-[124px]">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="py-6 md:py-8 px-4 md:px-6 bg-[#F5F5F5] group hover:bg-[#111010] transition-colors duration-300"
          >
            <div className="pb-4">
              <div className="bg-[#111010] flex items-center justify-center rounded-full w-10 h-10 group-hover:bg-[#F5F5F5] transition-colors duration-300">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-black transition-colors duration-300"
                >
                  <g clipPath="url(#clip0_10_2)">
                    <path
                      d="M9 13.5809H10.4545V4.35688L15.1047 6.30103C15.2356 6.35578 15.3472 6.44682 15.4255 6.56287C15.5039 6.67891 15.5456 6.81485 15.5455 6.9538V13.5809H17V15H1V13.5809H2.45455V4.10854C2.45453 3.97126 2.49533 3.83692 2.57201 3.72181C2.64869 3.6067 2.75795 3.51576 2.88655 3.46002L8.48873 1.03056C8.54415 1.00653 8.60485 0.996416 8.66531 1.00113C8.72576 1.00583 8.78405 1.02522 8.83486 1.05752C8.88568 1.08982 8.9274 1.134 8.95625 1.18605C8.98509 1.2381 9.00013 1.29636 9 1.35553V13.5809Z"
                      className="fill-white group-hover:fill-black transition-colors duration-300"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_2">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <h1 className="text-lg md:text-xl leading-tight uppercase font-medium pb-8 md:pb-14 group-hover:text-[#F5F5F5] transition-colors duration-300">
              {card.title}
            </h1>
            <p className="text-sm uppercase text-[#686868] pb-6 group-hover:text-[#ccc] transition-colors duration-300">
              {card.description}
            </p>
            <div className="flex items-center space-x-2 cursor-pointer">
              <h1 className="text-sm font-medium uppercase group-hover:text-[#F5F5F5] transition-colors duration-300">
                Read more
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#F5F5F5] transition-colors duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row px-4 md:px-14 lg:pl-[44px] pb-12 md:pb-20 lg:pb-[124px] lg:space-x-[97px] space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[676px]">
          <img
            src="https://images.unsplash.com/photo-1492659991124-ba70990ba2f4?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[300px] md:h-[400px] lg:h-[485px] object-cover"
            alt="Service showcase"
          />
        </div>
        <div className="pt-4 md:pt-6 lg:pt-[16px]">
          <h1 className="text-sm md:text-base uppercase text-[#686868] pb-2 md:pb-[8px]">
            best service
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[120%] font-medium uppercase pb-8 md:pb-12 lg:pb-[144px]">
            Find your place to live
            <br className="hidden md:block" /> and get help with the
            <br className="hidden md:block" /> best deals.
          </p>
          <p className="text-sm md:text-base leading-relaxed uppercase">
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br className="  hidden md:block"></br> dolor do amet sint. Velit
            officia consequat duis enim velit
            <br className="  hidden md:block"></br>
            mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8">
            <button className="border bg-[#111010] uppercase border-white py-3 px-8 rounded-full text-white text-sm md:text-base hover:bg-black transition-colors">
              get started
            </button>
            <button className="border uppercase border-black py-3 px-8 rounded-full text-black text-sm md:text-base hover:bg-gray-100 transition-colors">
              learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
