import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Jonathan Reid",
      // position: "Team Leader at Officeautomata",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "David's commitment to producing high-quality work was evident in every project he undertook. His broad technical knowledge, combined with a knack for problem-solving, ensured that our digital presence was always robust and engaging.",
      rating: 5,
    },
    {
      name: "Steven Gile",
      // position: "Founder at WALT Labs",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "Working with David was a seamless and productive experience. His ability to seamlessly work across both front-end and back-end development was instrumental in our project's success. He continually brought innovative ideas to the table, demonstrating his up-to-date knowledge of the latest tech trends.",
      rating: 5,
    },
    {
      name: "Donny Angel",
      // position: "Freelancer from USA",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "Collaborating with David was a truly enriching experience. His mastery of the full technology stack, from databases to server-side technologies, ensured our projects were consistently delivered on time and met our high standards. Additionally, his passion for continuous learning was contagious and encouraged the entire team to keep improving.",
      rating: 5,
    },
    {
      name: "Charles Mullins",
      // position: "User from UK",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "David is a highly skilled developer with an eye for detail. His ability to transform our ideas into a functional and user-friendly website was nothing short of remarkable. He was always available to answer questions and make adjustments, demonstrating his commitment to customer satisfaction.",
      rating: 5,
    },
    {
      name: "Robert Mayer",
      // position: "User from UK",
      src: "images/testimonial/client-sm-5.jpg",
      desc: "David began as an intern and quickly proved themselves to be a valuable asset. His dedication to learning and his natural aptitude for both front-end and back-end development made him a key player in our team. I have no doubt he will continue to make significant contributions to the tech industry.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
