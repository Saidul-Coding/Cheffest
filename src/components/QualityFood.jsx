
const QualityFood = ({title , text}) => {
  return (
    <div>
      <div className="items">
              <div className="w-[270px] text-center">
                <h3 className="font-bold font-inter text-[56px] leading-[66px] text-text  ">{title}</h3>
                <p className="font-inter font-normal text-[18px] leading-7.5 text-text">{text}</p>
              </div>
            </div>
    </div>
  )
}

export default QualityFood
