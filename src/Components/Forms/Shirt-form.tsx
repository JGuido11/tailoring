import React, { useState } from "react";
import "../../styles/css/styles.css";

const FormShirt: React.FC = () => {
  const [formData, setFormData] = useState({
    shirtLength: "",
    shoulder: "",
    chest: "",
    stomach: "",
    sleeveLength: "",
    biceps: "",
    wrist: "",
    collar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar aqui a lógica para enviar os dados para o servidor ou realizar outras ações.
    console.log(formData);
  };

  return (
    <div className='"Tailoring-form"'>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Choose a Collar:</label>
          <select name="Collars" id="Collar">
            <option value="1"></option>
            <option value="2">Point length 7cm</option>
            <option value="3">Point length 6cm</option>
            <option value="4">Point length 6.7cm</option>
            <option value="5">Point length 7.5cm</option>
            <option value="6">Point length 8cm</option>
            <option value="7">Stand Collar</option>
            <option value="8">Tuxado Colar</option>
            <option value="9">Point length 7.5cm</option>
          </select>
        </div>
        <br />
        <div>
          <label>Choose a Botton:</label>
          <select name="Bottons" id="Botton">
            <option value="1"></option>
            <option value="2">1 Botton Square</option>
            <option value="3">2 Botton Square</option>
            <option value="4">1 Botton Round</option>
            <option value="5">2 Botton Round</option>
            <option value="6">1 Botton Angle</option>
            <option value="7">2 Botton Angle</option>
            <option value="8">French Square</option>
            <option value="9">French Angle</option>
            <option value="10">Round French Square</option>
          </select>
        </div>
        <br />
        <div>
          <label>Choose a Contrast:</label>
          <select name="Contrasts" id="Contrast">
            <option value="1"></option>
            <option value="2">Contrast collar and cuff</option>
            <option value="3">Contrast collar</option>
            <option value="4">Contrast collar and cuff and placket</option>
            <option value="5">No Contrast</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="shirtLength">Shirt Length:</label>
          <input
            type="text"
            id="shirtLength"
            name="shirtLength"
            value={formData.shirtLength}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="shoulder">Shoulder:</label>
          <input
            type="text"
            id="shoulder"
            name="shoulder"
            value={formData.shoulder}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="chest">Chest:</label>
          <input
            type="text"
            id="chest"
            name="chest"
            value={formData.chest}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="stomach">Stomach:</label>
          <input
            type="text"
            id="stomach"
            name="stomach"
            value={formData.stomach}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="sleeveLength"> Sleeve Length:</label>
          <input
            type="text"
            id="sleeveLength"
            name="sleeveLength"
            value={formData.sleeveLength}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="biceps"> Biceps:</label>
          <input
            type="text"
            id="biceps"
            name="biceps"
            value={formData.biceps}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="wrist"> Wrist:</label>
          <input
            type="text"
            id="wrist"
            name="wrist"
            value={formData.wrist}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="collar"> Collar:</label>
          <input
            type="text"
            id="collar"
            name="collar"
            value={formData.collar}
            onChange={handleChange}
          />
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormShirt;
