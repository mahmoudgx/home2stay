interface Props {
  image: string;
}

const ClientCard = ({ image }: Props) => {
  return (
    <div className="bg-[#F5F5F5] flex justify-center items-center w-full min-h-[80px] md:min-h-[100px] p-4 rounded-md">
      <img
        src={image}
        alt="Client logo"
        className="w-auto h-auto max-w-full max-h-[60px] md:max-h-[80px]"
      />
    </div>
  );
};

export default ClientCard;
