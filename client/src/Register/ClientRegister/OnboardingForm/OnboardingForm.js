import React from "react";
import "./OnboardingForm.css";

const OnboardingForm = () => {
    return (
        <div className="container">
            <h4>Onboarding Form Complete</h4>
            <p className="text">
                Our compliance team will review the provided information to ensure we
                have the necessary documentation.
            </p>
            <p className="text">
                If you have any question, feel free to get in touch by emailing{" "}
                <a href="mailto:booking@taurgo.co.uk" className="link">
                    booking@taurgo.co.uk
                </a>
            </p>
            <h4>Confirm Your Registration</h4>
            <p className="text">
                After pressing "Finish" your registration form, you will receive a
                confirmation email. Please check your inbox (and spam folder) for this
                confirmation.
            </p>
        </div>
    );
};

export default OnboardingForm;