import ClientCard from "./ClientCard";
import nexflow from "../assets/nextflow.svg";
import globalchart from "../assets/globalchart.svg";
import marketsavy from "../assets/marketsavy.svg";
import bestbank from "../assets/bestbank.svg";
import epicdev from "../assets/epicdev.svg";
import starsup from "../assets/starsup.svg";
import teamtalk from "../assets/teamtalk.svg";
import exdone from "../assets/exdone.svg";
import overlays from "../assets/overlays.svg";
import payscale from "../assets/payscale.svg";

const Client = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[56px]">
      <div className="text-center pb-8 md:pb-[72px]">
        <h1 className="text-[14px] md:text-[16px] uppercase text-[#686868] pb-2 md:pb-[8px]">
          our client
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] uppercase font-medium">
          Our world client
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-[24px] pb-16 md:pb-[124px]">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-[24px]">
          <ClientCard image={nexflow} />
          <ClientCard image={globalchart} />
          <ClientCard image={marketsavy} />
          <ClientCard image={bestbank} />
          <ClientCard image={epicdev} />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-[24px]">
          <ClientCard image={starsup} />
          <ClientCard image={teamtalk} />
          <ClientCard image={exdone} />
          <ClientCard image={overlays} />
          <ClientCard image={payscale} />
        </div>
      </div>
    </div>
  );
};

export default Client;
