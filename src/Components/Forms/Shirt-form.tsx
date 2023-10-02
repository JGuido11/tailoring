import React, { useState } from "react";
import "../../styles/css/styles.css";

interface ShirtFormProps {
  onSave: (data: any) => void;
}

const FormShirt: React.FC<ShirtFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    shirtLength: "",
    shoulder: "",
    chest: "",
    stomach: "",
    sleeveLength: "",
    biceps: "",
    wrist: "",
    collar: "",
    collarChoice: "",
    buttonChoice: "",
    contrastChoice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar aqui a lógica para enviar os dados para o servidor ou realizar outras ações.
    console.log(formData);
  };

  return (
    <div className="Shirt-container">
      <form onSubmit={handleSubmit}>
        <div className="Shirt-container__row__col-3">
          <div className="Shirt-field">
            <label htmlFor="collarChoice">Choose a Collar:</label>
            <select
              name="collarChoice"
              id="collarChoice"
              value={formData.collarChoice}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="1">Point length 7cm</option>
              <option value="2">Point length 6cm</option>
              <option value="3">Point length 6.7cm</option>
              <option value="4">Point length 7.5cm</option>
              <option value="5">Point length 8cm</option>
              <option value="6">Stand Collar</option>
              <option value="7">Tuxedo Collar</option>
              <option value="8">Point length 7.5cm</option>
            </select>
          </div>

          <div className="Shirt-field">
            <label htmlFor="buttonChoice">Choose a Button:</label>
            <select
              name="buttonChoice"
              id="buttonChoice"
              value={formData.buttonChoice}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="1">1 Button Square</option>
              <option value="2">2 Button Square</option>
              <option value="3">1 Button Round</option>
              <option value="4">2 Button Round</option>
              <option value="5">1 Button Angle</option>
              <option value="6">2 Button Angle</option>
              <option value="7">French Square</option>
              <option value="8">French Angle</option>
              <option value="9">Round French Square</option>
            </select>
          </div>

          <div className="Shirt-field">
            <label htmlFor="contrastChoice">Choose a Contrast:</label>
            <select
              name="contrastChoice"
              id="contrastChoice"
              value={formData.contrastChoice}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="1">Contrast collar and cuff</option>
              <option value="2">Contrast collar</option>
              <option value="3">Contrast collar and cuff and placket</option>
              <option value="4">No Contrast</option>
            </select>
          </div>
        </div>

        <div className="Shirt-container__row__col-3">
          <div className="Shirt-field">
            <label htmlFor="shirtLength">Shirt Length:</label>
            <input
              type="text"
              id="shirtLength"
              name="shirtLength"
              value={formData.shirtLength}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="shoulder">Shoulder:</label>
            <input
              type="text"
              id="shoulder"
              name="shoulder"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="chest">Chest:</label>
            <input
              type="text"
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="Shirt-container__row__col-3">
          <div className="Shirt-field">
            <label htmlFor="stomach">Stomach:</label>
            <input
              type="text"
              id="stomach"
              name="stomach"
              value={formData.stomach}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="sleeveLength">Sleeve Length:</label>
            <input
              type="text"
              id="sleeveLength"
              name="sleeveLength"
              value={formData.sleeveLength}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="biceps">Biceps:</label>
            <input
              type="text"
              id="biceps"
              name="biceps"
              value={formData.biceps}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="wrist">Wrist:</label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
              onChange={handleChange}
            />
          </div>

          <div className="Shirt-field">
            <label htmlFor="collar">Collar:</label>
            <input
              type="text"
              id="collar"
              name="collar"
              value={formData.collar}
              onChange={handleChange}
            />
          </div>
        </div>

        <br />
        <div>
          <textarea
            name="name"
            id="name"
            placeholder="Other Special Requirements"
            rows={3}
            cols={35}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormShirt;
