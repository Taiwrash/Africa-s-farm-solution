import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => (
  <div>
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <h3>
            We do offer awesome
            <span>Services</span>
          </h3>
          <p>
            Our services includes connecting farmers from various places,
            getting the investors for registered farmers on our platform and
            also provide vetenary doctors with storage facilities
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble" />
              </div>
              <h4 className="title">
                <Link to="/signup/farmers" id="farmers">
                  Farmers
                </Link>
              </h4>
              <p className="description">
                We have set of Farmers that are ready in producing foods and
                and other natural materials for the promotion of the world
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file" />
              </div>
              <h4 className="title">
                <Link to="/signup/investors" id="investors">
                  Investors
                </Link>
              </h4>
              <p className="description">
                We have set of investors that are ready to help the less
                privileges farmers by investing in their various farms
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer" />
              </div>
              <h4 className="title">
                <Link to="/signup/consumers" id="consumers">
                  Consumers
                </Link>
              </h4>
              <p className="description">
                We connects both the farmers and the consumer of their farm
                produce, Worry no more all farm products are available in
                just a click away
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
