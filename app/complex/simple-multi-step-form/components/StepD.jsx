import React from "react";

const StepD = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step D: Confirm for Data
      </h1>
      <DataConfirmRow label="First Name" value={formData.firstName} />
      <DataConfirmRow label="Last Name:" value={formData.lastName} />
      <DataConfirmRow label="Business Name:" value={formData.businessName} />
      <DataConfirmRow label="Busines City:" value={formData.businessCity} />
      <DataConfirmRow
        label="Business Website:"
        value={formData.businessWebsite}
      />
      <DataConfirmRow label="Business Email:" value={formData.businessEmail} />
      <DataConfirmRow
        label="Income Per Month:"
        value={formData.incomePerMonth}
      />
      <DataConfirmRow label="Tax Percent:" value={formData.taxPercent} />

      <div className="my-4 flex items-center">
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          value={formData.agreeToTerms}
          onChange={(e) => handleChangeInput(e)}
          className="w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500  "
        />
        <label htmlFor="agreeToTerms"> I agree to terms of service</label>
      </div>

      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={handlePrevStep}
        >
          Previous
        </button>

        <button
          className="bg-blue-400 px-4 py-2 rounded-xl"
          onClick={handleSubmitFormData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepD;

const DataConfirmRow = ({ label, value }) => {
  return (
    <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-900">{value}</span>
    </div>
  );
};
