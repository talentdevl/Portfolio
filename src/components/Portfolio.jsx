import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    WEBSITE: "WebSite",
    MOBILE: "Mobile",
    DESKTOP: "Desktop",
    DEVOPS: "DevOps",
  };

  const projectsData = [
    {
      title: "Web Application Development for Telus International",
      projectInfo:
        "This project involved the development of a comprehensive web application for Telus International, a global leader in providing digital customer experience (CX) solutions. The objective was to enhance user experience and streamline the company's processes. The technology stack used for the project included React, Node.js, and Next.js.",
      client: "Telus International",
      technologies: "React.js, Node.js, Next.js",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://www.telusinternational.com/",
        link: "https://www.telusinternational.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Telus1.jpg",
      sliderImages: [
        "images/projects/Telus2.jpg",
        // "images/projects/project-5.jpg",
      ],
      categories: [filters.WEBSITE],
    },
    {
      title: "Homebuying Process Management Tool Development",
      projectInfo:
        "Ruuster is a web-based tool designed to help users manage the homebuying process effectively. The inspiration behind this project was the founder's personal experience in homebuying, where he realized the need for a unified management platform. This realization led to the creation of Ruuster, aiming to aid users in purchasing the right home, at the right price, and at the right time. The website was developed using Node.js and React.js over a period of 7 months. The specific technologies utilized include:",
      client: "Ruuster",
      technologies: "React.js, Node.js, Experss.js, Redux, Redux-Thunk",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Ruuster1.jpg",
      sliderImages: [
        "images/projects/Ruuster2.jpg",
        // "images/projects/project-5.jpg",
      ],
      categories: [filters.WEBSITE],
    },
    {
      title: "Performance Marine Engines and Parts Platform",
      projectInfo:
        "The project involved providing technological assistance to Teague Custom Marine, a premier shop for high-performance marine engines and parts. The work included helping performance marine enthusiasts find top-of-the-line custom engine packages and aftermarket parts over a period of 5 years",
      client: "Teague Custom Marine",
      technologies: "React.js, Material UI, Firebase, Animation, Axio, Moment.js, Video React",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://teaguecustommarine.com/",
        link: "https://teaguecustommarine.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Teague2.jpg",
      sliderImages: [
        "images/projects/Teague1.jpg",
        // "images/projects/project-5.jpg",
      ],
      categories: [filters.WEBSITE],
    },
    {
      title: "Performance Marine Engines and Parts Platform",
      projectInfo:
        "The project involved providing technological assistance to Teague Custom Marine, a premier shop for high-performance marine engines and parts. The work included helping performance marine enthusiasts find top-of-the-line custom engine packages and aftermarket parts over a period of 5 years.",
      client: "Teague Custom Marine",
      technologies: "React.js, Material UI, Firebase, Animation, Axios, Moment.js, Video React",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://teaguecustommarine.com/",
        link: "https://teaguecustommarine.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Teague2.jpg",
      sliderImages: [
        "images/projects/Teague1.jpg",
        // "images/projects/project-5.jpg",
      ],
      categories: [filters.WEBSITE],
    },
    {
      title: "DevOps Support Managed Services",
      projectInfo:
        "Earthling Interactive, a company that designs, builds, and supports websites and web-based applications, sought to decommission their existing, complex Rancher environment and transition their clients to a more streamlined, lightweight, and accessible environment optimized for a multi-cloud environment.",
      client: "Earthling Interactive",
      technologies: "Amazon EKS, Helm",
      // industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://earthlinginteractive.com/",
        link: "https://earthlinginteractive.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Earthling1.jpeg",
      sliderImages: [
        "images/projects/Earthling2.jpeg",
        "images/projects/Earthling3.jpeg",
      ],
      categories: [filters.DEVOPS],
    },
    {
      title: "Infrastructure Modernization",
      projectInfo:
        "Site Impact, a data management platform, sought to modernize and scale-out its infrastructure. The aim was to architect a scalable infrastructure capable of handling their business operations effectively and efficiently.",
      client: "Site Impact",
      technologies: "GKE, BigQuery, Composer, Saraproc",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://www.siteimpact.com/",
        link: "https://www.siteimpact.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Site1.jpeg",
      sliderImages: [
        "images/projects/Site2.jpeg",
      ],
      categories: [filters.DEVOPS],
    },
    {
      title: "Cloud Transformation",
      projectInfo:
        "Aperian Global, an international consulting firm, engaged WALT Labs to assist in migrating their single content management system (CMS) to the Google Cloud Platform (GCP). Additionally, they wanted to scale their single-instance application into multiple instances to provide failover protection and high availability.",
      client: "Aperian Global",
      technologies: "GCP, Gluster, Load Balancing, GCP CloudSQL",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://www.aperianglobal.com/",
        link: "https://www.aperianglobal.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Aperian1.jpeg",
      sliderImages: [
        // "images/projects/project-3.jpg",
        // "images/projects/project-5.jpg",
      ],
      categories: [filters.DEVOPS],
    },
    {
      title: "Sys Admin for Client Installation Support",
      projectInfo:
        "This project involves working with clients to deploy an on-premise client-server-AI solution. The task requires assisting clients with various checks and validations, such as TCP Port checks and database connection checks, as well as ensuring the correct functioning of the Kubernetes AI. The deployment of infrastructure is already 90% automated through a dashboard.",
      client: "Office Automata",
      technologies: "Windows Server, Microsoft SQL Server, Kubernetes, Newwork Administration",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://officeautomata.com/",
        link: "https://officeautomata.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Office2.jpg",
      sliderImages: [
        "images/projects/Office1.jpg",
        "images/projects/Office3.jpg",
      ],
      categories: [filters.DEVOPS, filters.DESKTOP],
    }, 
    {
      title: "Centralized Corporate Information and Communication Application",
      projectInfo:
        "A cross-platform application was developed that is available for both iOS and Android devices. This application provides quick access to useful information for employees and also allows users to send requests to the company's internal systems to quickly resolve various issues. I acted as a Full Stack developer on this project and primarily focused on frontend development and API integration.",
      client: "Blink",
      technologies: "Flutter, Dart, Business Analysis, UI/UX design, Quality Assurance",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "https://joinblink.com",
        link: "https://joinblink.com",
      },
      url1: {
        name: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.usekimono.android&hl=en_GB",
      },
      url2: {
        name: "App Store",
        link: "https://apps.apple.com/gb/app/blink-workplace-messaging/id1046583493",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/Blink1.jpg",
      sliderImages: [
        "images/projects/Blink3.jpg",
        "images/projects/Blink4.jpg",
        "images/projects/Blink2.jpg",
      ],
      categories: [filters.MOBILE],
    },       
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-6 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        {/* <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div> */}

                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span style={{ 
                              position: 'absolute', 
                              width: '1px', 
                              height: '1px', 
                              padding: '0', 
                              margin: '-1px', 
                              overflow: 'hidden', 
                              clip: 'rect(0,0,0,0)', 
                              border: '0' 
                            }}>
                              Open {project.title}
                            </span>
                          </a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
