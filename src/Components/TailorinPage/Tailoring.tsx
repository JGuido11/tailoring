import React, { useState } from "react";
import SuitForm from "../Forms/Suit-form";
import FormOvercoat from "../Forms/Overcoat-form";
import FormVest from "../Forms/Vest-form";
import FormShirt from "../Forms/Shirt-form";
import WomanSuit from "../Forms/Woman-form";
import WomanShirt from "../Forms/WomanShirt-form";
import "../../styles/css/styles.css";
import ExportButtonContainer from "../../Context/ExportCSV";

const TailoringPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"suit" | "vest" | "shirt" | "overcoat" | "womanSuit" | "womanShirt">("suit");

  const [formData, setFormData] = useState({
    suitFormData: null,
    vestFormData: null,
    shirtFormData: null,
    overcoatFormData: null,
    womanSuitFormData: null,
    womanShirtFormData: null,
  });

  const updateFormData = (formName: string, data: any) => {
    setFormData({ ...formData, [formName]: data });
  };

  return (
    <div className="tailoring-page__container">
      <div className="tailoring-page__tabs">
        <button
          className={activeTab === "suit" ? "active" : ""}
          onClick={() => setActiveTab("suit")}
        >
          Suit
        </button>
        <button
          className={activeTab === "vest" ? "active" : ""}
          onClick={() => setActiveTab("vest")}
        >
          Vest
        </button>
        <button
          className={activeTab === "shirt" ? "active" : ""}
          onClick={() => setActiveTab("shirt")}
        >
          Shirt
        </button>
        <button
          className={activeTab === "overcoat" ? "active" : ""}
          onClick={() => setActiveTab("overcoat")}
        >
          Overcoat
        </button>
        <button
          className={activeTab === "womanSuit" ? "active" : ""}
          onClick={() => setActiveTab("womanSuit")}
        >
          Woman Suit Order
        </button>
        <button
          className={activeTab === "womanShirt" ? "active" : ""}
          onClick={() => setActiveTab("womanShirt")}
        >
          Woman Shirt Order
        </button>
      </div>

      <div className="tailoring-page__tab-content__row__col-6">
        {activeTab === "suit" && <SuitForm onSave={(data) => updateFormData("suitFormData", data)} />}
        {activeTab === "vest" && <FormVest onSave={(data) => updateFormData("vestFormData", data)} />}
        {activeTab === "shirt" && <FormShirt onSave={(data) => updateFormData("shirtFormData", data)} />}
        {activeTab === "overcoat" && <FormOvercoat onSave={(data) => updateFormData("overcoatFormData", data)} />}
        {activeTab === 'womanSuit' && <WomanSuit onSave={(data) => updateFormData("womanSuitFormData", data)} />}
        {activeTab === 'womanShirt' && <WomanShirt onSave={(data) => updateFormData("womanShirtFormData", data)} />}
      </div>
{/* 
      <ExportButtonContainer formData={formData} /> */}
    </div>
  );
};

export default TailoringPage;
