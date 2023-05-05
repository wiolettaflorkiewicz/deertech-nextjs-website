import { services } from "../constants";
import styles from "../style";

const ServicesCard = ({ icon, title, content }) => (
  <div className={`flex flex-col px-10 py-6 max-w-[330px] my-4 mr-4`}>
    <div className={`w-[80px] h-[80px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[60%] h-[60%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-[25px] text-white my-4">
      {title}
    </h4>
    <p className="font-poppins text-sm text-white my-2">{content}</p>
  </div>
);

const Services = () => (
  <section className={`${styles.flexWrap}`}>
    <h1 className={`${styles.heading1}`}>
      <span className="text-gradient">Our Services</span>
    </h1>
    <p className={`${styles.paragraph} mb-5 text-left`}>
      Our unique people development system and inexhaustible talent pool enables
      us to work in two key directions: managed end-to-end software development
      and composing dedicated teams for on-demand needs.
    </p>
    <div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={`flex flex-wrap sm:justify-center w-full`}
    >
      {services.map((services) => (
        <ServicesCard key={services.id} {...services} />
      ))}
    </div>
  </section>
);

export default Services;
