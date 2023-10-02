import React, { useState } from "react";
import "../../styles/css/styles.css";

interface SuitFormProps {
  onSave: (data: any) => void;
}

const SuitForm: React.FC<SuitFormProps> = ({ onSave }) => {
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
    // Adicione aqui a lógica para enviar os dados para o servidor ou realizar outras ações.
    console.log(formData);
  };

  return (
    <div className="Suit-container">
      <form onSubmit={handleSubmit}>
        <div className="Suit-container__row__col-3">
          <div className="Suit-field">
            <label htmlFor="neck">Neck:</label>
            <input
              type="text"
              id="neck"
              name="neck"
              value={formData.neck}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="Suit-field">
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
          <div className="Suit-field">
            <label htmlFor="shoulder">Shoulder:</label>
            <input
              type="text"
              id="shoulder"
              name="shoulder"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="Suit-container__row__col-3">
          <div className="Suit-field">
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
          <div className="Suit-field">
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
          <div className="Suit-field">
            <label htmlFor="sleeveLength">Sleeve Length:</label>
            <input
              type="text"
              id="sleeveLength"
              name="sleeveLength"
              value={formData.sleeveLength}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="Suit-container__row__col-3">
          <div className="Suit-field">
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
          <div className="Suit-field">
            <label htmlFor="wrist">Wrist:</label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
              onChange={handleChange}
            />
          </div>

          <div className="Suit-field">
            <label htmlFor="legLength">Leg Length:</label>
            <input
              type="text"
              id="legLength"
              name="legLength"
              value={formData.legLength}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="Suit-container__row__col-3">
          <div className="Suit-field">
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
          <div className="Suit-field">
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
          <div className="Suit-field">
            <label htmlFor="crotch">Crotch:</label>
            <input
              type="text"
              id="crotch"
              name="crotch"
              value={formData.crotch}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="Suit-container__row__col-3">
          <div className="Suit-field">
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
          <div className="Suit-field">
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
          <div className="Suit-field">
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
          <div className="Suit-field">
            <label htmlFor="calfSize">Calf Size:</label>
            <input
              type="text"
              id="calfSize"
              name="calfSize"
              value={formData.calfSize}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SuitForm;
