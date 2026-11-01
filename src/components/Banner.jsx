import BgImage from "../assets/Banner (2).png"
import OverlayImage from "../assets/overly.png"

const Banner = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${OverlayImage}"), url("${BgImage}")`,
      }}
    >
    <div className="w-[1400px]">
        <div>
            <div className="max-w-163 pt-26.5 pl-34 pb-61.5">
                <h1 className="leading-24">Welcome!We Made Delicious Food for You</h1>
                <p className="font-inter text-[20px] leading-7.5 text-text font-normal mt-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className="flex items-center justify-center bg-text rounded-[40px] font-bold font-inter leading-7 px-12.5 mt-10 py-5 text-bg cursor-pointer">Order Online</button>
            </div>
        </div>
    </div>

    </section>
  )
}

export default Banner
