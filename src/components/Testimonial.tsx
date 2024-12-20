import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

interface TestimonialData {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
}

interface TestimonialCardProps extends TestimonialData {
  isExpanded: boolean;
  onHover: (expanded: boolean) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  isExpanded,
  onHover,
  name,
  role,
  text,
  avatar,
  rating,
}) => (
  <div
    className={`
      relative overflow-hidden bg-[#F5F5F5] rounded-lg
      transition-all duration-500 ease-in-out
      ${
        isExpanded
          ? "md:w-[652px] w-full md:h-[444px] h-auto"
          : "md:w-[314px] w-full md:h-[444px] h-[300px] cursor-pointer hover:shadow-lg"
      }
    `}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    {isExpanded ? (
      <div className="flex md:flex-row flex-col h-full">
        {/* Content Section */}
        <div className="md:min-w-[326px] w-full p-6 md:p-10">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-medium uppercase mb-1">
                {name}
              </h3>
              <p className="text-sm uppercase text-gray-500">{role}</p>
            </div>

            <blockquote className="text-sm md:text-base leading-relaxed uppercase">
              {text}
            </blockquote>

            {rating && (
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl md:text-2xl ${
                      index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image Section for expanded card */}
        <div className="md:min-w-[314px] w-full md:h-full h-[300px]">
          <img
            src={avatar}
            alt={name}
            className={`
              w-full h-full md:object-cover object-contain
              transition-all duration-500 
              ${isExpanded ? "scale-100" : "scale-105 hover:scale-100"}
            `}
          />
        </div>
      </div>
    ) : (
      /* Image Section for collapsed card */
      <div className="w-full h-full">
        <img
          src={avatar}
          alt={name}
          className={`
            w-full h-full object-cover
            transition-all duration-500 
            ${isExpanded ? "scale-100" : "scale-105 hover:scale-100"}
          `}
        />
      </div>
    )}
  </div>
);

const Testimonial: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number>(0);

  const testimonials: TestimonialData[] = [
    {
      name: "John teguh",
      role: "world client",
      text: " We would not have found our home or would not have found it in time without home2stay. Because we are having trouble finding homes, we have instructed our agents to remove certain cities from our list of potential locations. ",
      avatar: avatar,
      rating: 5,
    },
    {
      name: "Sarah Smith",
      role: "loyal customer",
      text: " The service provided was exceptional. The team went above and beyond to ensure our satisfaction with the property selection process. ",
      avatar: avatar2,
      rating: 4,
    },
    {
      name: "Mike Johnson",
      role: "new resident",
      text: " I couldn't be happier with my experience. The process was smooth and the support was outstanding throughout my home search. ",
      avatar: avatar3,
      rating: 5,
    },
  ];

  return (
    <section className="py-8 md:py-32 px-4 md:px-14 mx-auto">
      <div>
        <div className="mb-8 md:mb-16">
          <h2 className="text-sm md:text-base uppercase text-gray-500 mb-2">
            testimonials
          </h2>
          <h3 className="text-2xl md:text-4xl uppercase font-medium">
            What our Customer Says
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              isExpanded={expandedCard === index}
              onHover={(expanded) => setExpandedCard(expanded ? index : 0)}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
