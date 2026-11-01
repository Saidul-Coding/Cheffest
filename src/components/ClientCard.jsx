
import comma from "../assets/comma.svg"


const ClientCard = ({image,name, text }) => {
  return (
    <div className=" max-w-[371px] rounded-lg bg-[#191919] p-5 text-white shadow-lg">
      {/* Client Information */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt="Client"
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-semibold">{name}</h3>

          <p className="text-xs text-gray-400">{text}</p>

          <div className="mt-1 flex gap-1 text-sm text-[#FF9901]">★★★★★</div>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="mt-5 flex items-center text-3xl font-bold leading-none">
       <img src={comma}  /><div className="w-full border-b border-white/30"></div>
      </div>

      {/* Review Text */}
      <p className="mt-3 text-[18px] leading-7 text-text font-medium font-inter">
        There are many variations of Lorem Ipsum available, but the majority. If
        you are going to use a passage of Lorem Ipsum, you need to be sure there
        isn't anything embarrassing hidden in it.
      </p>
    </div>
  );
};

export default ClientCard;
