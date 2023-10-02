import React from "react";

const ExportButtonContainer: React.FC<{ formData: any }> = ({ formData }) => {
  const handleExport = () => {
    const dataToExport = {
      "Suit Data": formData.suitFormData,
      "Vest Data": formData.vestFormData,
      "Shirt Data": formData.shirtFormData,
      "Overcoat Data": formData.overcoatFormData,
      "Woman Suit Data": formData.womanSuitFormData,
      "Woman Shirt Data": formData.womanShirtFormData,
    };

    const csvContent = "data:text/csv;charset=utf-8,"
      + Object.entries(dataToExport)
        .map(([formName, formData]) => {
          let csvData = `${formName}\n`;
          if (formData) {
            for (const [key, value] of Object.entries(formData)) {
              csvData += `${key},${value}\n`;
            }
          }
          return csvData;
        })
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tailoring_data.csv");
    document.body.appendChild(link);

    link.click();
  };

  return (
    <div className="export-button-container">
      <button onClick={handleExport}>Export Data as CSV</button>
    </div>
  );
};

export default ExportButtonContainer;
