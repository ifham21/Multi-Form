import React, { useState } from "react";
import "./ExpertiseSelection.css";

const expertiseAreas = [
  {
    title: "Photography",
    details: [
      "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
      "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
      "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
      "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
      "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
      "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
    ],
    roleDescription:
      "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
  },
  {
    title: "Inventory Clerk",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
  {
    title: "Field Assessor",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
  {
    title: "RICS Surveyor / Valuer",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
];


const PartnerExpertiseSelection = () => {
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

export default PartnerExpertiseSelection;
