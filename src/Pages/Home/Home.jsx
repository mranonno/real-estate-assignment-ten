import Properties from "./Properties/Properties";
import Slider from "./Slider/Slider";
import agent1 from "../../assets/agent1.jpg";
import agent2 from "../../assets/agent2.jpg";
import agent3 from "../../assets/agent3.jpg";
import agent4 from "../../assets/agent4.jpg";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Slider />
      <Properties />
      {/***** Agent Team *****/}
      <div className="flex flex-col items-center text-center font-poppins mx-4">
        <h3 data-aos="fade-down" data-aos-duration="1000" className="md:text-5xl text-4xl text-slate-900 font-cormorant font-bold">
          Meet The Agent Team
        </h3>
        <p data-aos="fade-up" data-aos-duration="1000" className="text-slate-900 opacity-60 my-6">
          Elite team of agents specializing in covert operations, intelligence
          gathering, and high-stakes missions, <br /> ensuring global security
          with precision and discretion.
        </p>
        <div className="flex flex-col lg:flex-row md:flex-wrap justify-center lg:gap-20 gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <img data-aos="zoom-in" className="size-48 rounded-full" src={agent1} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in" className="text-lg font-semibold mt-4">Jack John</h3>
            <p data-aos-duration="1000" data-aos="fade-up" className="text-slate-900 opacity-70">Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <img data-aos="zoom-in" className="size-48 rounded-full" src={agent2} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in" className="text-lg font-semibold mt-4">Krista John</h3>
            <p data-aos-duration="1000" data-aos="fade-up" className="text-slate-900 opacity-70">Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <img data-aos="zoom-in" className="size-48 rounded-full" src={agent3} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in" className="text-lg font-semibold mt-4">Michael Ford</h3>
            <p data-aos-duration="1000" data-aos="fade-up" className="text-slate-900 opacity-70">Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <img data-aos="zoom-in" className="size-48 rounded-full" src={agent4} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in" className="text-lg font-semibold mt-4">Stephan John</h3>
            <p data-aos-duration="1000" data-aos="fade-up" className="text-slate-900 opacity-70">Designer</p>
          </div>
        </div>
      </div>
      {/***** Customer Review Section *****/}
      <div className="flex flex-col items-center text-center font-poppins md:mt-16 mt-5 lg:mx-20 mx-4 md:mx-8">
        <h3 data-aos="fade-down" data-aos-duration="1000" className="md:text-5xl text-4xl text-slate-900 font-cormorant font-bold">
          What Our Client Say ?
        </h3>
        <p data-aos-duration="1000" data-aos="fade-up" className="text-slate-900 opacity-60 my-6">
          Discover client testimonials, feedback, and experiences showcasing our
          exceptional <br /> service and products. Trust the voices of satisfied
          customers.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-20">
          <div className="flex flex-col items-center">
            <p className="text-stone-900 opacity-70" data-aos="flip-up" data-aos-duration="1000">My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <img data-aos="flip-left" data-aos-duration="1000" className="size-12 rounded-full mt-2" src={agent1} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in"  className="text-lg font-semibold mt-2">Jack John</h3>
            <p data-aos-duration="1000" data-aos="fade-up"  className="text-slate-900 opacity-70">Designer</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-stone-900 opacity-70" data-aos="flip-up" data-aos-duration="1000">My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <img data-aos="flip-left" data-aos-duration="1000"  className="size-12 rounded-full mt-2" src={agent2} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in"  className="text-lg font-semibold mt-4">Krista John</h3>
            <p data-aos-duration="1000" data-aos="fade-up"  className="text-slate-900 opacity-70">Designer</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-stone-900 opacity-70" data-aos="flip-up" data-aos-duration="1000">My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <img data-aos="flip-left" data-aos-duration="1000"  className="size-12 rounded-full mt-2" src={agent3} alt="" />
            <h3 data-aos-duration="1000" data-aos="zoom-in"  className="text-lg font-semibold mt-4">Michael Ford</h3>
            <p data-aos-duration="1000" data-aos="fade-up"  className="text-slate-900 opacity-70">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
