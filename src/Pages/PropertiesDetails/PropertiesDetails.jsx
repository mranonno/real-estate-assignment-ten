import { useLoaderData, useParams } from "react-router-dom";
import { BiArea } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const PropertiesDetails = () => {
  const { id } = useParams();
  const propertiesData = useLoaderData();
  const properties = propertiesData.filter((property) =>
    id.includes(property.id)
  );
  const [
    {
      estate_title,
      image,
      segment_name,
      description,
      area,
      location,
      facilities,
      price,
      status,
    },
  ] = properties;

  return (
    <div className="md:mt-12 mt-5 lg:mx-40 md:mx-16 mx-4 font-poppins">
      <Helmet>
        <title>Properties Details | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mb-12 flex items-center justify-center overflow-hidden">
        <img data-aos="zoom-in-up" data-aos-duration="1000"  className="rounded-2xl" src={image} />
      </div>
      <div className="bg-[#F8FAFC] p-5 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h3 data-aos="fade-down" data-aos-duration="1000"  className="md:text-4xl text-2xl font-medium">{estate_title}</h3>
          <p data-aos="fade-left" data-aos-duration="1000"  className="bg-primary text-white py-1 px-4 mt-2 rounded-full font-medium w-24">
            For {status}
          </p>
        </div>
        <button data-aos="fade-right" data-aos-duration="1000"  className="border border-primary px-4 py-2 text-primary font-semibold rounded-full my-4">
          #{segment_name}
        </button>
        <p data-aos="flip-up" data-aos-duration="1000"  className="text-slate-900 opacity-70">{description}</p>
        <div className="flex flex-col md:flex-row md:items-center gap-2 my-3">
          <h3 data-aos="fade-right" data-aos-duration="1000" className="font-bold text-lg">Facilities:</h3>
          {facilities.map((facility, index) => (
            <p data-aos="fade-down" data-aos-duration="1000" 
                className="bg-primary bg-opacity-10 rounded-full px-5 py-1 text-primary font-medium text-center"
              key={index}
            >
              {facility}
            </p>
          ))}
        </div>
        <h3 data-aos="fade-right" data-aos-duration="1000"  className="text-slate-900 text-lg font-semibold my-2 gap-2 flex items-center">
          <span className="text-lg text-primary">
            <BiArea />
          </span>
          {area}
        </h3>

        <h3 data-aos="fade-right" data-aos-duration="1000"  className="text-slate-900 text-lg font-semibold my-2 gap-2 flex items-center">
          <span className="text-lg text-primary">
            {" "}
            <IoLocationSharp />
          </span>
          {location}
        </h3>

        <h3 data-aos="fade-right" data-aos-duration="1000"  className="font-bold text-primary flex items-center text-xl gap-2 my-2">
          <span>
            <IoIosPricetags />
          </span>
          Price: {price}
        </h3>

        <div data-aos="fade-up" data-aos-duration="1000" >
          <button className="bg-primary px-8 py-2 rounded-full text-lg text-white font-medium mt-2">
            Book Now
          </button>
          <button className="bg-primary px-8 py-2 rounded-full text-lg text-white font-medium ml-4">
            Offer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
