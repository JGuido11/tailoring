import React, { useState } from "react";
import "../../styles/css/styles.css";

const SuitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    neck: "",
    frontJacketLength: "",
    shoulder: "",
    chest: "",
    stomach: "",
    sleeveLength: "",
    biceps: "",
    wrist: "",
    legLength: "",
    waist: "",
    hips: "",
    crotch: "",
    thigh: "",
    knee: "",
    cuffFinished: "",
    calfSize: "",
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
        <div className="form">
          <label className="label" htmlFor="neck">Neck:</label>
          <input
          className="input"
            type="text"
            id="neck"
            name="neck"
            value={formData.neck}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="frontJacketLength">Front Jacket Length:</label>
          <input
            type="text"
            id="frontJacketLength"
            name="frontJacketLength"
            value={formData.frontJacketLength}
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
          <label htmlFor="sleeveLength">Sleeve Length:</label>
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
          <label htmlFor="biceps">Biceps:</label>
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
          <label htmlFor="wrist">Wrist:</label>
          <input
            type="text"
            id="wrist"
            name="wrist"
            value={formData.wrist}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="legLength">leg Length:</label>
          <input
            type="text"
            id="legLength"
            name="legLength"
            value={formData.legLength}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="waist">Waist:</label>
          <input
            type="text"
            id="waist"
            name="waist"
            value={formData.waist}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="hips">Hips:</label>
          <input
            type="text"
            id="hips"
            name="hips"
            value={formData.hips}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="crotch"> Crotch: </label>
          <input
            type="text"
            id="crotch"
            name="crotch"
            value={formData.crotch}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="thigh">Thigh:</label>
          <input
            type="text"
            id="thigh"
            name="thigh"
            value={formData.thigh}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="knee">Knee:</label>
          <input
            type="text"
            id="knee"
            name="knee"
            value={formData.knee}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="cuffFinished">Cuff Finished:</label>
          <input
            type="text"
            id="cuffFinished"
            name="cuffFinished"
            value={formData.cuffFinished}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="calfSize">Calf Size:</label>
          <input
            type="text"
            id="calfSize"
            name="calfSize"
            value={formData.calfSize}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SuitForm;
