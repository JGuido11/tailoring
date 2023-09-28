import React, { useState } from "react";
import SuitForm from "../Forms/Suit-form";
import FormOvercoat from "../Forms/Overcoat-form";
import FormVest from "../Forms/Vest-form";
import FormShirt from "../Forms/Shirt-form";
import WomanSuit from "../Forms/Woman-form";
import WomanShirt from "../Forms/WomanShirt-form";
import "../../styles/css/styles.css";

const TailoringPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"form" | "FormVest" | "FormShirt" | "FormOvercoat" | "FormWoman" | "WomanShirt" >("form");

  return (
    <div className="tailoring-page__container">
      <div className="tailoring-page__tabs">
        <button
          className={activeTab === "form" ? "active" : ""}
          onClick={() => setActiveTab("form")}
        >
          Suit
        </button>
        <button
          className={activeTab === "FormVest" ? "active" : ""}
          onClick={() => setActiveTab("FormVest")}
        >
          Vest
        </button>
        <button
          className={activeTab === "FormShirt" ? "active" : ""}
          onClick={() => setActiveTab("FormShirt")}
        >
          Shirt
        </button>
        <button
          className={activeTab === "FormOvercoat" ? "active" : ""}
          onClick={() => setActiveTab("FormOvercoat")}
        >
          Overcoat
        </button>
        <button
          className={activeTab === "FormWoman" ? "active" : ""}
          onClick={() => setActiveTab("FormWoman")}
        >
          Woman Suit Order
        </button>
        <button
          className={activeTab === "WomanShirt" ? "active" : ""}
          onClick={() => setActiveTab("WomanShirt")}
        >
          Woman Shirt Order
        </button>
      </div>

      <div className="tailoring-page__tab-content__row__col-6">
        {activeTab === "form" && <SuitForm />}
        {activeTab === "FormVest" && <FormVest/>}
        {activeTab === "FormShirt" && <FormShirt/>}
        {activeTab === "FormOvercoat" && <FormOvercoat/>}
        {activeTab === 'FormWoman' && <WomanSuit />}
        {activeTab === 'WomanShirt' && <WomanShirt />}
      </div>

    </div>
  );
};

export default TailoringPage;
