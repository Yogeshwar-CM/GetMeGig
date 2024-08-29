import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideIcons from "../../components/SideIcons/SideIcons";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

export default function Home() {
  return (
    <div className="Home lato">
      <Navbar />
      <CustomCursor />
      {/* <SideIcons /> */}
    </div>
  );
}
