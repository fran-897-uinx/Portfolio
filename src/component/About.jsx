import React from "react";
import "./component2/About.css";
const About = () => {
  return (
    <div className="about">
      <div className="About-name">
        <h1> ABOUT-ME </h1>
        <hr />
        <p>
          How you will find more information about me, what i do, and my current
          skills mostly in terms of programming and technology,
        </p>
      </div>
      <div className="about-section">
        <div className="about-get">
          <h3>get to know me </h3>
          <p>
            i'm a fronted <span> web-developer</span> building and managing the
            Front-end of <br />
            website and web-application that leads to the success of the overall
            <br />
            product. Check out some of{" "}
            <span>my work in the project section.</span>
          </p>
          <p>
            I also like sharing content related to the stuff that i have learned
            <br />
            over the years in <span>web-development</span> so it can help other
            people of the Dev- community. <br /> Feel free to connet or follow
            me on my <br />
            <span>
              <a href="http://">linkedin</a> and <a href="http://">twitter</a>{" "}
            </span>
            where i post useful content related to Web Development and <br />
            programming
          </p>
          <p>
            I'm open to job opportunities where i can contribute, learn and{" "}
            <br />
            grow. if you have a good opportunity that matches my skills and{" "}
            <br />
            experience then don't hesitate to contact me.{" "}
          </p>
          <button>
            <a href="tel:+2347043118841">CONTACT</a>
          </button>
        </div>
        <div className="my-skills">
          <h3>My Skills</h3>
          <div className="Skills">
            <div className="box">HTML:5</div>
            <div className="box">CSS</div>
            <div className="box">JavaScript</div>
            <div className="box">React</div>
            <div className="box">GIT</div>
            <div className="box">Github</div>
            <div className="box">Responsive Design</div>
            <div className="box">Terminal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
