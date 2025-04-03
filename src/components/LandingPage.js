import React from "react";
import UploadButton from "./UploadButton";
import FilterSection from "./FilterSection";

const LandingPage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Frontend Assignment</h2>
      <FilterSection />
      <UploadButton />
    </div>
  );
};

export default LandingPage;
