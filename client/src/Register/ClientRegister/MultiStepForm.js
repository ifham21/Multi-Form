import React, { useState } from "react";
import "./Multi.css";
import ProgressBar from "./ProgressBar-Component/ProgressBar";
import ExpertiseSelection from "./ExpertiseSelection/ExpertiseSelection";
import OrganisationDetails from "./OrganisationDetails/OrganisationDetails";
import CompanyAddress from "./CompanyAddress/CompanyAddress";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import OnboardingForm from "./OnboardingForm/OnboardingForm";

const MultiStepForm = () => {
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
        <ProgressBar currentStep={currentStep} />
      </div>

      <div className="step-selection">
        {/* Step Content */}
        {currentStep === 1 && <ExpertiseSelection />}
        {currentStep === 2 && <OrganisationDetails />}
        {currentStep === 3 && <CompanyAddress />}
        {currentStep === 4 && <CompanyInformation />}
        {currentStep === 5 && <OnboardingForm />}

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

export default MultiStepForm;
