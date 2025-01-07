import React, { useState } from "react";
import "../ClientRegister/Multi.css";
import PartnerExpertiseSelection from "./ExpertiseSelection/PartnerExpertiseSelection";
import PartnerOnboardingForm from "./OnboardingForm/PartnerOnboardingForm";
import PartnerProgressBar from "./PartnerProgressBar/PartnerProgressBar";
import PartnerPersonalDetails from "./PersonalDetails/PartnerPersonalDetails";
import PartnerCurrentAddress from "./CurrentAddress/PartnerCurrentAddress";
import PartnerProfessionalDetails from "./ProfessionalDetails/PartnerProfessionalDetails";

const PartnerMultiStepForm = () => {
  const [currentStep, setStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) setStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 5) {
      console.log("Finish clicked");
      // Add finish logic here
    } else if (currentStep > 1) {
      setStep(currentStep - 1);
    }
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="multi-step-form">
        <PartnerProgressBar currentStep={currentStep} />
      </div>

      <div className="step-selection">
        {/* Step Content */}
        {currentStep === 1 && <PartnerExpertiseSelection />}
        {currentStep === 2 && <PartnerPersonalDetails />}
        {currentStep === 3 && <PartnerCurrentAddress />}
        {currentStep === 4 && <PartnerProfessionalDetails />}
        {currentStep === 5 && <PartnerOnboardingForm />}

        {/* Navigation Buttons */}
        <div
          className={`form-navigation ${
            currentStep === 1 ? "first-step" : currentStep === 5 ? "last-step" : "default-step"
          }`}
        >
          {currentStep > 1 && currentStep < 5 && (
            <button onClick={prevStep}>Previous</button>
          )}
          {currentStep === 5 && (
            <button onClick={prevStep} className="finish">
              Finish
            </button>
          )}
          {currentStep < 5 && (
            <button onClick={nextStep} className={currentStep === 1 ? "right" : ""}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerMultiStepForm;
