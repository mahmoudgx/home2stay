import search from "../assets/Search.svg";

const Search = () => {
  return (
    <div className="lg:absolute lg:w-[405px] w-full lg:top-[574px] lg:right-[48px] bg-white p-6 lg:py-8 lg:px-6 mx-auto lg:mx-0 max-w-[405px]">
      <div>
        <h1 className="uppercase text-center text-xl lg:text-2xl font-medium">
          find where you live
        </h1>
        <div className="pt-6 lg:pt-10">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="uppercase text-sm text-[#818181] block">
                Location
              </label>
              <select
                id="countries"
                className="bg-[#FAFAFA] text-[#111010] text-sm uppercase rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 appearance-none cursor-pointer hover:bg-[#F5F5F5] transition-colors"
              >
                <option selected>Choose a country</option>
                <option value="AE">Dubai, UAE</option>
                <option value="FR">France, Paris</option>
                <option value="CA">Canada, Ottawa</option>
                <option value="ID">Indonesia, Yogyakarta</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="uppercase text-sm text-[#818181] block">
                type
              </label>
              <select
                id="types"
                className="bg-[#FAFAFA] text-[#111010] text-sm uppercase rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 appearance-none cursor-pointer hover:bg-[#F5F5F5] transition-colors"
              >
                <option selected>Choose a type</option>
                <option value="0">minimalist</option>
                <option value="1">Modern Scandinavian</option>
                <option value="2">Industrial Loft</option>
                <option value="3">
                  Japandi (Japanese + Scandinavian Fusion)
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="uppercase text-sm text-[#818181] block">
                price
              </label>
              <select
                id="prices"
                className="bg-[#FAFAFA] text-[#111010] text-sm uppercase rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 appearance-none cursor-pointer hover:bg-[#F5F5F5] transition-colors"
              >
                <option selected>Choose a price</option>
                <option value="0">$5.000 - $10.000</option>
                <option value="1">$10,000 - $20,000</option>
                <option value="2">$20,000 - $35,000</option>
                <option value="3">$35,000 - $50,000</option>
              </select>
            </div>
          </form>

          <button className="flex justify-center items-center bg-[#111010] rounded-lg w-full py-4 px-8 space-x-2 cursor-pointer mt-8 hover:bg-[#222222] transition-colors group">
            <img
              src={search}
              alt="search"
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-white uppercase">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
