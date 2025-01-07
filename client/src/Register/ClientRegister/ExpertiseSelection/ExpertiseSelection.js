import React, { useState } from "react";
import "./ExpertiseSelection.css";

const expertiseAreas = [
  {
    title: "Individual Agency",
    details: [
      "This option is for sole estate agents or realtors operating independently. Individuals often manage a limited portfolio of",
      "properties and require tailored services to support their specific needs in property marketing, inspections, and valuations.",
    ],
    roleDescription:
      "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
  },
  {
    title: "Corporate Account",
    details: [
      "This option is for sole estate agents or realtors operating independently. Individuals often manage a limited portfolio of",
      "properties and require tailored services to support their specific needs in property marketing, inspections, and valuations.",
    ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
  {
    title: "Medium Enterprise",
    details: [
      "This option is for sole estate agents or realtors operating independently. Individuals often manage a limited portfolio of",
      "properties and require tailored services to support their specific needs in property marketing, inspections, and valuations.",
    ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
];

const ExpertiseSelection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div >
      <div className="registration-container">
          <div className="headerContent">
            <p>Thank you for choosing to partner with Taurgo</p>
          </div>
          <div>
            <p><b>To ensure a successful partnership, please follow the Taurgo registration process</b></p>
            <div className="contents">
              <p>Complete the Registration Form:</p>
              <p>
                Fill out the required details on the Taurgo registration page. This information is
                essential for our initial due diligence to ensure you are placed within the correct team
                and area of Taurgo.
              </p>

              <p>Onboarding with Taurgo:</p>
              <p>
                After submitting the registration form, a member of the Taurgo team will reach out to
                you to complete the onboarding process. They will guide you through the next steps and
                ensure you are properly onboarded with the right team and resources.
              </p>

              <p>Verification and Placement:</p>
              <p>
                Taurgo will review the information provided during registration and complete their
                initial due diligence. This will determine the appropriate team and area within Taurgo
                for your partnership with the You.com Smart Assistant.
              </p>
            </div>
          </div>
      </div>

      <h2>Select your area of expertise</h2>
      <div>
        {expertiseAreas.map((expertise, index) => (
          <div className="expertise-container">
            <div key={index} className="expertise-item">
            <div className="expertise-header">
                <input type="checkbox" id={`expertise-${index}`} />
                <label
                htmlFor={`expertise-${index}`}
                onClick={() => toggleExpand(index)}
                className="expertise-title"
                >
                {expertise.title}
                </label>
            </div>
            {expanded === index && (
                <div className="expertise-details">
                <ul>
                    {expertise.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                    ))}
                </ul>
                {expertise.roleDescription && (
                    <p className="role-description">{expertise.roleDescription}</p>
                )}
                </div>
            )}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default ExpertiseSelection;
