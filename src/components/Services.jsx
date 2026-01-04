import { Link } from "react-router-dom";
import asianDentistryImg from "../assets/home-services-img/asian-dentistry.jpg";
import dentalImplantsImg from "../assets/home-services-img/dental-implant.jpg";
import pediatricDentistryImg from "../assets/home-services-img/predictive.jpg";
import teethAlignmentImg from "../assets/home-services-img/teethaligement.jpg";
import rootCanalImg from "../assets/home-services-img/root-cannel.jpg";
import wisdomToothImg from "../assets/home-services-img/wisdom-tooth.jpg";
const serviceImages = {
  cosmetic: asianDentistryImg,
  alignment: teethAlignmentImg,
  wisdom: wisdomToothImg,
  rootCanal: rootCanalImg,
  implants: dentalImplantsImg,
  hygiene: pediatricDentistryImg,
};

const serviceData = [
  {
    id: "cosmetic",
    image: serviceImages.cosmetic,
    title: "Cosmetic Dentistry",
    description:
      "Advanced smile enhancement treatments combining restoration, technology, and natural-looking results.",
    path: "/cosmetic-dentistry",
  },
  {
    id: "implants",
    image: serviceImages.implants,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement offering natural aesthetics, stability, and long-lasting confidence.",
    path: "/dental-implants",
  },
  {
    id: "hygiene",
    image: serviceImages.hygiene,
    title: "Pediatric Dentistry",
    description:
      "Gentle dental cleaning and routine check-ups designed to protect your child’s smile and support healthy oral development.",
    path: "/pediatric-dentistry",
  },
  {
    id: "alignment",
    image: serviceImages.alignment,
    title: "Teeth Alignment",
    description:
      "Modern orthodontic solutions using metal, ceramic, and clear aligners for precise, comfortable smile correction.",
    path: "/teeth-alignment",
  },
  {
    id: "wisdom",
    image: serviceImages.wisdom,
    title: "Wisdom Tooth Surgery",
    description:
      "Safe, painless removal of impacted wisdom teeth with advanced surgical precision.",
    path: "/wisdom-tooth-surgery",
  },
  {
    id: "root-canal",
    image: serviceImages.rootCanal,
    title: "Root Canal Treatment",
    description:
      "Pain-free treatment to remove infection and preserve your natural tooth structure.",
    path: "/root-canal-treatment",
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f4f1] min-h-screen pt-8 pb-20 px-6 sm:px-10 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-[#88d4cb] mb-6 font-roboto-slab">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
          We combine modern technology with gentle care to provide a complete
          range of professional dental services for every smile.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviceData.map((service, index) => (
          <Link
            to={service.path}
            key={index}
            id={service.id}
            className="block bg-[#f7f4f1] rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 scroll-mt-24 group"
          >
            {/* Image */}
            <div className="h-80 md:h-96 w-full overflow-hidden font-roboto-slab">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text Content */}
            <div className="p-8 font-roboto-slab ">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-[#88d4cb] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-raleway">
                {service.description}
              </p>


            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
