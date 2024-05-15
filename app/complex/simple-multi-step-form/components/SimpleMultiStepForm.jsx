"use client";

import React, { useState, useEffect } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  taxPercent: 0,
  agreeToTerms: false,
};

const stepsArray = ["A", "B", "C", "D"];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState("A");
  const [formData, setFormData] = useState(initialFormData);

  const handleNextStep = () => {
    if (step === "A") setStep("B");
    else if (step === "B") setStep("C");
    else if (step === "C") setStep("D");
  };

  const handlePrevStep = () => {
    if (step === "D") setStep("C");
    else if (step === "C") setStep("B");
    else if (step === "B") setStep("A");
  };

  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === "agreeToTerms") {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }

    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert("ERROR! You must agree to Terms of Service");
    } else {
      setStep("final");
    }
  };

  useEffect(() => {
    console.log([formData]);
  }, [formData]);

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step == "final") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              item === step ? "bg-blue-500" : ""
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className=" w-[600px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 border-dotted border-sky-300 bg-yellow-50">
      {renderTopStepNumbers()}
      {step === "A" ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === "B" ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "C" ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "D" ? (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === "final" ? <StepFinal /> : null}
    </div>
  );
};

export default SimpleMultiStepForm;
