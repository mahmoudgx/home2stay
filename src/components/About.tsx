import shapeone from "../assets/shape1.svg";

const About = () => {
  const tags = [
    "residential",
    "real estate",
    "interior",
    "exterior",
    "property",
    "studio",
    "house",
    "apartment",
  ];

  return (
    <div className="bg-[#111010] ">
      {/* Shape container with controlled height */}
      <div className="w-full h-[80px] md:h-[120px] lg:h-[160px] overflow-hidden">
        <img src={shapeone} alt="decorative shape" />
      </div>

      <div className="px-4 md:px-14 lg:px-[56px] pt-12 md:pt-24 lg:pt-[162px] space-y-4 md:space-y-[16px] pb-12 md:pb-24 lg:pb-[143px]">
        <h1 className="text-[#9F9F9F] text-sm md:text-base uppercase">
          About us
        </h1>
        <p className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[120%] text-white uppercase font-medium max-w-[1200px]">
          Since its founding over 20 years ago, home2stay has built a solid
          reputation for excellence in the sale, purchase and rental of real
          estate.
        </p>
      </div>

      {/* Tags section with proper containment */}
      <div className="px-4 md:px-14 lg:px-[56px] pb-8 md:pb-12 lg:pb-[58px]">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="border border-white rounded-full transition-colors hover:bg-white group"
            >
              <h1 className="text-sm md:text-base uppercase text-white px-6 md:px-8 py-2 md:py-3 whitespace-nowrap group-hover:text-[#111010]">
                {tag}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
