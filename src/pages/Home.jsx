import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import ProductCard from "../components/ProductCard";
import QualityFood from "../components/QualityFood";
import ClientCard from "../components/ClientCard";

import priceCard from "../assets/priceCard.svg";
import image_1 from "../assets/menu_1.png";
import image_2 from "../assets/menu_2.png";
import image_3 from "../assets/menu_3.png";
import image_4 from "../assets/menu_4.png";
import image_5 from "../assets/menu_5.png";
import image_6 from "../assets/menu_6.png";

import manImg from "../assets/foodMaker.png";
import playIcon from "../assets/play-icon.png";
import avater from "../assets/avater.png";
import avater_1 from "../assets/avater-1.png";
import avater_2 from "../assets/avater-2.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Menu />
      <section>
        <div className="container grid grid-cols-3 gap-7.5">
          <ProductCard
            Image={image_1}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
          <ProductCard
            Image={image_2}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
          <ProductCard
            Image={image_3}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
          <ProductCard
            Image={image_4}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
          <ProductCard
            Image={image_5}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
          <ProductCard
            Image={image_6}
            title="Naan Burger"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            cardImg={priceCard}
            price="$1.85"
          />
        </div>
        <div className="container flex justify-center items-center pt-20">
          <button className="flex items-center justify-center bg-text rounded-[40px] font-bold font-inter leading-7 px-12.5 mt-10 py-5 text-bg cursor-pointer">
            See All
          </button>
        </div>
      </section>
      <section id="FoodMaker" className="my-37.5">
        <div className="container ">
          <div className="max-w-205 mx-auto">
            <h2 className="flex items-center justify-center pb-12 font-semibold font-inter text-5xl text-text">
              Why We are Best Food Maker
            </h2>
            <p className="text-center text-text font-normal font-inter text-xl leading-7.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex items-center justify-between pt-17.5 gap-[87px]">
            <div className="w-142.5">
              <p className="font-medium text-text text-[18px] leading-7.75 font-inter">
                It is a long established fact that a reader will be distracted
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The normal distribution of
                letters, as opposed to using 'Content Many desktop publishing
                packages and web page editors search for 'lorem ipsum' will
                uncover many web sites still in humour and the like.{" "}
                <span className="font-bold">Read More</span>
              </p>
            </div>
            <div className="relative w-142.5 overflow-hidden rounded-xl">
              <img src={manImg} className="h-107.5 w-full object-cover" />

              <button className="absolute pl-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-3xl text-black shadow-lg">
                <img src={playIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="quality-food" className="pb-37.5">
        <div className="container text-center">
          <div>
            <div className="flex items-center justify-center">
              <h2 className="flex items-center justify-center pb-12 font-semibold font-inter text-5xl text-text">
                We believe in making quality food
              </h2>
            </div>
            <div className="flex gap-[30px]">
              <QualityFood title="2M+" text="Happy Customers" />
              <QualityFood title="98%" text="Customer Satisfaction" />
              <QualityFood title="20+" text="Our Branches " />
              <QualityFood title="100+" text="Total Employees  " />
            </div>
          </div>
        </div>
      </section>

      <section id="Franchisee">
        <div className="container mx-auto">
          <div className="w-[850px] mx-auto text-center flex items-center justify-center">
            <h2 className="flex items-center justify-center pb-12 font-semibold font-inter text-5xl leading-[70px] text-text">
              Start The Adventure Today And Become a Franchisee
            </h2>
          </div>
          <div className="text-center text-text font-inter font-normal leading-7.5 text-[20px]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <button className="mx-auto flex items-center justify-center rounded-[40px] bg-text px-12.5 py-5 mt-10 font-bold font-inter leading-7 text-bg cursor-pointer">
            Become a Franchisee
          </button>
        </div>
      </section>

      <section id="Clients" className="py-37.5">
        <div className="container">
          <div className="w-[850px] mx-auto text-center flex items-center justify-center">
            <h2 className="flex items-center justify-center pb-12 font-semibold font-inter text-5xl leading-[70px] text-text">
              What Our Clients Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-7.5">
            <ClientCard
              image={avater}
              name="Michal Gun "
              text="Head of sales at Tesla "
            />
            <ClientCard
              image={avater_1}
              name="Aleena White"
              text="Accountant of Ozone "
            />
            <ClientCard
              image={avater_2}
              name="Cries Lee"
              text="CEO Of Montee"
            />
            <ClientCard
              image={avater}
              name="Michal Gun "
              text="Head of sales at Tesla "
            />
            <ClientCard
              image={avater_1}
              name="Aleena White"
              text="Accountant of Ozone "
            />
            <ClientCard
              image={avater_2}
              name="Cries Lee"
              text="CEO Of Montee"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mb-37.5">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-8">
            For more Support
          </h2>

          {/* Form Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full h-12 px-6 rounded-full border border-neutral-400 text-sm text-neutral-800 placeholder-neutral-500 focus:outline-none focus:border-black transition"
              readOnly
            />
            <button
              type="button"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Our Restaurants.
              <br />
              Where to Find Us?
            </h2>

            <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Want to have a superb meal in an exceptional setting with family,
              friends or work colleagues, here are the addresses of our
              restaurants.
            </p>

            <button
              type="button"
              className="mt-10 px-8 py-3.5 bg-white text-black font-semibold text-sm sm:text-base rounded-full hover:bg-neutral-200 transition duration-200"
            >
              Find The Nearest Cheffest
            </button>
          </div>

          {/* Right Column: Map Preview Card */}
          <div className="relative w-[483px]  h-[470px] aspect-square max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl border ">


            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.768257267804!2d90.36453464452683!3d23.80287449075942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1793527521143!5m2!1sen!2sbd"
                width="483"
                height="470"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mirpur-10 Map"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/> 
    </div>
  );
};

export default Home;
