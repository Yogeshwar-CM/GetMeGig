import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideIcons from "../../components/SideIcons/SideIcons";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import support from "../../assets/support.svg";

export default function Home() {
  return (
    <div className="Home lato">
      <Navbar />
      <CustomCursor />
      {/* <SideIcons /> */}
      <div className="main-home">
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
            reality. With our expertise, you can focus on growing your business
            while we handle the rest.
          </p>
          <button className="contact-btn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}
