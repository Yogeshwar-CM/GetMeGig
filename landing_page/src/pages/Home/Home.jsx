import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { WhenInView } from "../../utils/utils";
import SideIcons from "../../components/SideIcons/SideIcons";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import support from "../../assets/support.svg";
import wd from "../../assets/wd.svg";
import ec from "../../assets/ec.svg";
import seo from "../../assets/seo.svg";
import cs from "../../assets/cs.svg";
import ic from "../../assets/ic.svg";
import cw from "../../assets/cw.svg";
import gd from "../../assets/gd.svg";
import ts from "../../assets/ts.svg";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <div className="Home lato">
      <Navbar />
      <CustomCursor />
      {/* <SideIcons /> */}
      <WhenInView>
        <div className="main-home" id="about">
          <img src={support} alt="illustration" className="main-img" />
          <div className="rs-home">
            <h1 className="oswald head1">YOUR IT & FREELANCING PARTNER</h1>
            <h2 className="lato">
              Elevate Your Business with Expert IT Solutions, Content Writing,
              SEO, Design Services, and More
            </h2>
            <p className="p1">
              At GetMeGig, we specialize in delivering comprehensive IT services
              and a wide range of freelance solutions tailored to your business
              needs. Whether you're looking for cutting-edge IT support,
              compelling content writing, effective SEO strategies, or creative
              design work, our skilled team is here to turn your ideas into
              reality. With our expertise, you can focus on growing your
              business while we handle the rest.
            </p>
            <button className="contact-btn">
              <a href="#contact">CONTACT US</a>
            </button>
          </div>
        </div>
      </WhenInView>
      <WhenInView>
        <div className="services" id="services">
          <h2 className="oswald head1">SERVICES WE OFFER</h2>
          <div className="grp1 lato">
            <div className="box">
              <img
                src={wd}
                alt="Professional Web and Mobile Development Services"
                className="wd"
              />
              Web & Mobile Development
            </div>
            <div className="box">
              <img
                src={cw}
                alt="High-Quality Content Writing Services for SEO and Marketing"
              />
              Content Writing
            </div>
            <div className="box">
              <img
                src={cs}
                alt="Custom Software Development Tailored to Your Business Needs"
              />
              Custom Software
            </div>
            <div className="box">
              <img
                src={gd}
                alt="Creative Graphic Design Services for Branding and Marketing"
              />
              Graphic Design
            </div>
            <div className="box">
              <img
                src={ic}
                alt="Expert IT Consulting Services for Business Optimization"
              />
              IT Consulting
            </div>
            <div className="box">
              <img
                src={ec}
                alt="E-Commerce Development Services for Online Businesses"
              />
              E-commerce
              <br /> Development
            </div>
            <div className="box">
              <img
                src={ts}
                alt="Reliable Tech Support Services for IT Systems"
              />
              Tech Support
            </div>
            <div className="box">
              <img
                src={seo}
                alt="SEO Services to Improve Website Ranking and Traffic"
              />
              SEO Services
            </div>
          </div>
        </div>
      </WhenInView>
      <WhenInView>
        <Contact id="contact" />
      </WhenInView>
    </div>
  );
}
