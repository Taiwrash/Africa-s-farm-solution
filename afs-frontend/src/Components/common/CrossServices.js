import React from "react";
import SingleService from "./SingleService";

const services = [
  {
    title: "Farmers",
    description:
      "We have set of Farmers that are ready in producing foods and and other natural materials for the promotion of the world",
    icon: "bx bxl-dribbble",
  },
  {
    title: "Investors",
    description:
      "We have set of doctors that are ready to help the less privileges farmers by giving advices on their various farms",
    icon: "bx bx-file",
  },
  {
    title: "Consumers",
    description:
      "We connects both the farmers and the consumer of their farm produce, Worry no more all farm products are available in just a click away",
    icon: "bx bx-world",
  },
];

const CrossServices = () => (
  <section id="services" className="services">
    <div className="container">
      <div className="section-title">
        <h2>Services</h2>
        <h3>We do offer awesome Services</h3>
        <p>
          Our services includes connecting farmers from various places, getting
          the investors for registered farmers on our platform and also provide
          vetenary doctors with storage facilities
        </p>
      </div>
      <div className="row">
        {services.map((service) => (
          <SingleService
            title={service.title}
            description={service.description}
            icon={service.icon}
            key={service.title}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CrossServices;
