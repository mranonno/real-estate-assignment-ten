import { IoHome } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { GiSkeletonKey } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center mt-8">
      <Helmet>
        <title>About Us | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h3 className="animate__animated animate__bounceIn text-3xl font-bold">About Us</h3>
      <div></div>
      <div>
        <h3 data-aos="fade-left" data-aos-duration="1000" className="text-3xl font-semibold text-slate-900 mt-12">
          How It Works
        </h3>
        <p data-aos="fade-right" data-aos-duration="1000" className="text-slate-800 opacity-80">
          A great platform to buy, sell and rent your properties without any
          <br className="hidden md:flex"/>
          agent or commissions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-28 md:mx-44 mx-4 md:my-12 my-5">
        <div className="flex flex-col items-center space-y-2">
          <IoHome data-aos="zoom-in" data-aos-duration="1000" className="text-4xl text-primary" />
          <h3 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="text-xl font-semibold text-slate-800">
            Evaluate Property
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-slate-900 opacity-70">
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
          <MdSupportAgent data-aos="zoom-in" data-aos-duration="1000" className="text-4xl text-primary" />
          <h3 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="text-xl font-semibold text-slate-800">
            Meeting with Agent
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-slate-900 opacity-70">
            Met Agent Miller, nerves faded as she saw potential, offered
            insightful feedback, fostering hope and collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <GiSkeletonKey data-aos="zoom-in" data-aos-duration="1000" className="text-4xl text-primary" />
          <h3 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="text-xl font-semibold text-slate-800">
            Close the Deal
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-slate-900 opacity-70">
            Concise pitch showcasing value, benefits, and urgency to prompt
            agreement, sealing successful transaction or agreement.
          </p>
        </div>
      </div>
      <div>
        <h3 data-aos="fade-left" data-aos-duration="1000" className="text-3xl font-semibold">Have Question ? <br className="md:hidden"/> Get in touch!</h3>
        <p data-aos="fade-right" data-aos-duration="1000" className="text-slate-900 opacity-70">
          A great platform to buy, sell and rent your properties without any
          agent or commissions.
        </p>
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-6">
          <Link
            className="px-8 text-white text-lg font-medium py-2 bg-primary rounded-full"
            to={"/contact"}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
