const ProductCard = ({ title, text, Image, price, cardImg }) => {
  return (
    <div className="w-full h-110.5 max-w-92.5 overflow-hidden rounded-xl border border-shadow bg-shadow shadow-md">
      {/* Product Image */}
      <div className="h-59  w-82.5 p-5 bg-shadow">
        <img src={Image} className="h-full w-full object-cover" />
      </div>

      {/* Product Information */}
      <div className="space-y-3 px-5">
        <h2 className="text-[24px] font-bold leading-8.5 font-inter text-text">{title}</h2>
        <p className="text-[16px] leading-6.5 font-normal text-text font-inter" >{text}</p>

        {/* Price */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-text">{price}</span>
          <div>
           <a href="#"> <img src={cardImg} className="h-full w-full object-cover" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
