import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D1820] p-6 flex flex-col  text-white font-poppins mt-12">
      <div className="flex flex-col md:flex-row md:gap-12 gap-5 lg:gap-48">
        <aside>
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="size-10"
            src="/logo.png"
            alt=""
          />
          <p data-aos="fade-down" data-aos-duration="1000" className="text-2xl">
            Pinecrest Homes
          </p>
          <p
            data-aos="fade-up" data-aos-duration="1000"
            className="opacity-80">
            A great platform to buy, sell and rent your
            <br /> properties. without any agent or commissions.
          </p>
        </aside>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-44 gap-5">
          <nav
            className="flex flex-col"
          >
            <h6 data-aos="flip-up"
            data-aos-duration="1000" className="footer-title">Services</h6>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Rent</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Sale</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Listing</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Advertisement</Link>
          </nav>
          <nav
            className="flex flex-col"
          >
            <h6 data-aos="flip-up"
            data-aos-duration="1000" className="footer-title">Company</h6>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">About us</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Contact</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Blog</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Login</Link>
          </nav>
          <nav
            className="flex flex-col"
          >
            <h6 data-aos="flip-up"
            data-aos-duration="1000" className="footer-title">Legal</h6>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Terms of use</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Privacy policy</Link>
            <Link data-aos="flip-up"
            data-aos-duration="1000" className="link link-hover">Cookie policy</Link>
          </nav>
        </div>
      </div>
      <hr className="border-white border-dashed opacity-30 w-full my-5" />
      <div className="w-full flex justify-center">
        <p className="animate__backInUp animate__animated opacity-50 text-white">
          @ 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
