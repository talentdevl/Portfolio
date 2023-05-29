import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2002 - 2006",
      title: "Computer Science",
      place: "University of North Texas",
      desc: "Bachelor of Science - BS",
    },
    // {
    //   yearRange: "2005 - 2008",
    //   title: "Bachelor Degree",
    //   place: "University of California",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   yearRange: "2009 - 2012",
    //   title: "Master Degree",
    //   place: "Harvard University",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const experienceDetails = [
    {
      yearRange: "2021 - 2023",
      title: "Senior Full Stack Developer",
      company: "WALT Labs",
      desc1: "- Worked extensively with both front-end and back-end technologies to develop high-availability applications.",
      desc2: "- Developed and maintained full-stack applications using a variety of technologies.",
      desc3: "- Implemented high availability and load-balancing strategies.",
      desc4: "- Worked extensively with cloud platforms and DevOps tools.",
    },
    {
      yearRange: "2019 - 2021",
      title: "Senior Full Stack Developer",
      company: "OfficeAutomata",
      desc1: "- Developed full-stack applications, working with front-end and back-end technologies.",
      desc2: "- Contributed to numerous successful projects, employing my knowledge and skills to deliver high-quality solutions.",
      desc3: "- Delivered robust and scalable software solutions for various clients. - Utilized my strong coding skills to write efficient and reusable code.",
      desc4: "- Worked in close collaboration with the design team to ensure the seamless implementation of new features.",
    },
    {
      yearRange: "2016 - 2019",
      title: "Full Stack Developer",
      company: "Extra Nerds",
      desc1: "- Honed my skills as a Full Stack Developer, applying my knowledge of front-end and back-end technologies to develop robust, scalable solutions.",
      desc2: "- Worked on a variety of projects, contributing to each phase of the development process.",
      desc3: "- Involved in various stages of the software development lifecycle, from initial concept to deployment and maintenance.",
      desc4: "- Developed both frontend and backend components using state-of-the-art technologies.",
    },
    {
      yearRange: "2013 - 2016",
      title: "Full Stack Developer",
      company: "Tender Software",
      desc1: "- Was focus on Software Development, Application Development, and Maintenance.",
      desc2: "- Worked with .Net and PHP Development, delivering scalable solutions to meet clients' needs.",
      desc3: "- Performed maintenance tasks and developed new features for existing applications.",
    },
    {
      yearRange: "2010 - 2013",
      title: "Web and Mobile App Developer",
      company: "Espresso Moon LLC",
      desc1: "- Specialized in custom business software development, mobile apps, online marketing, and application hosting.",
      desc2: "- Contributed to the design of commercial websites, providing creative services, and optimizing search engine marketing.",
      desc3: "- Worked on custom software solutions and mobile apps, contributing to both development and design.",
      desc4: "- Participated in the design, coding, testing, and maintenance of several web applications.",
    },
    {
      yearRange: "2006 - 2010",
      title: "Intern / Frontend Developer",
      company: "WebCreek",
      desc1: "- Began as an intern, learning the basics of software development and business consulting, then promoted to a Frontend Developer position where I contributed to mobile and web application development projects.",
      desc2: "Here, I had my first exposure to software development and business consulting, with a particular focus on Web applications. This experience provided a solid foundation for my future roles in Full Stack Development.",
    },
  ];

  const skills = [
    {
      name: "React.js",
      percent: 100,
    },
    {
      name: "Angular",
      percent: 95,
    },
    {
      name: "Vue.js",
      percent: 100,
    },
    {
      name: "TypeScript",
      percent: 100,
    },
    // {
    //   name: "Nuxt.js",
    //   percent: 60,
    // },
    {
      name: "Next.js",
      percent: 95,
    },
    // {
    //   name: "Three.js",
    //   percent: 100,
    // },
    {
      name: "Web3.js",
      percent: 90,
    },
    // {
    //   name: "D3.js",
    //   percent: 100,
    // },
    {
      name: "Gatsby.js",
      percent: 100,
    },
    {
      name: "HTML5",
      percent: 100,
    },
    {
      name: "CSS/CSS3",
      percent: 100,
    },
    {
      name: "SCSS",
      percent: 100,
    },
    {
      name: "JavaScript",
      percent: 100,
    },
    {
      name: "jQuery",
      percent: 100,
    },
    {
      name: "Bootstrap",
      percent: 100,
    },
    {
      name: "Tailwind",
      percent: 100,
    },
    {
      name: "NodeJS",
      percent: 100,
    },
    {
      name: "Laravel",
      percent: 100,
    },
    {
      name: "PHP",
      percent: 100,
    },
    {
      name: "Ruby",
      percent: 90,
    },
    {
      name: "Go",
      percent: 85,
    },
    {
      name: "MongoDB",
      percent: 90,
    },
    {
      name: "NoSQL",
      percent: 90,
    },
    {
      name: "MySQL",
      percent: 95,
    },
    {
      name: "PostgreSQL",
      percent: 90,
    },
    {
      name: "Python",
      percent: 85,
    },
    {
      name: "Django",
      percent: 85,
    },
    {
      name: "AWS",
      percent: 100,
    },
    {
      name: "Azure",
      percent: 80,
    },
    {
      name: "DevOps",
      percent: 85,
    },
    {
      name: "ASP.NET",
      percent: 80,
    },
    {
      name: "C#",
      percent: 80,
    },
    {
      name: "Java",
      percent: 80,
    },
    {
      name: "React Native",
      percent: 90,
    },
    {
      name: "Swift",
      percent: 90,
    },
    {
      name: "Ionic",
      percent: 90,
    },
    {
      name: "Android",
      percent: 90,
    },
    {
      name: "iOS",
      percent: 90,
    },
    {
      name: "Firebase",
      percent: 95,
    },
    {
      name: "Docker",
      percent: 95,
    },
  ];

  return (
    <section
      id="resume"
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-12">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-12">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.company}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc1}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc3}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc4}
                  </p>
                  {/* <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc5}
                  </p> */}
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
