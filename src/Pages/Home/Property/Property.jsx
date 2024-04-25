import PropTypes from "prop-types";
import { BiArea } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  const {
    estate_title,
    image,
    status,
    description,
    segment_name,
    price,
    facilities,
    area,
    location,
    id,
  } = property;
  return (
    <div data-aos="zoom-in"  data-aos-duration="1000" className="md:w-[440px] bg-base-100 shadow-xl relative border-2 overflow-hidden rounded-2xl flex flex-col font-poppins">
      <div className="bg-primary text-white py-1 px-4 rounded-full absolute top-2 right-2 font-medium">
        For {status}
      </div>
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-primary font-medium text-xl">{price}</h3>
          <h3 className="text-lg text-[#131313CC]">#{segment_name}</h3>
        </div>
        <h2 className="font-bold text-start text-xl text-slate-900 my-2">
          {estate_title}
        </h2>
        <p className="text-slate-900 opacity-80 mb-4 ">
          {description.slice(0, 89)} .....
        </p>
        <hr className="border-dashed" />
        <div className="flex gap-2 my-3">
          {facilities.map((facility, index) => (
            <p
              className="bg-primary bg-opacity-10 rounded-full px-2 py-1 text-primary font-medium"
              key={index}
            >
              {facility}
            </p>
          ))}
        </div>
        <hr className="border-dashed" />

        <div className="flex gap-4 flex-col md:flex-row lg:justify-between md:items-center mt-4">
          <div>
            <h2 className="flex gap-1 items-center text-[#131313CC]">
              <span className="text-primary">
                <IoLocationSharp />
              </span>
              {location}
            </h2>
            <h2 className="flex gap-1 items-center text-[#131313CC]">
              <span className="text-primary">
                <BiArea />
              </span>
              {area}
            </h2>
          </div>
          <Link
            to={`/propertiesDetails/${id}`}
            className="bg-primary font-medium text-lg text-white py-2 px-4 rounded-full hover:bg-opacity-60"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

Property.propTypes = {
  property: PropTypes.object,
};

export default Property;
