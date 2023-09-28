import React, { useState } from 'react';
import '../../styles/css/styles.css';

const WomanSuit: React.FC = () => {
  const [formData, setFormData] = useState({
    neck: "",
    shoulder: "",
    sleeveLength: "",
    breastPoint: "",
    wrist: "",
    chest: "",
    stomach: "",
    biceps: "",
    frontWaistLength: "",
    jacketLength: "",
    waist: "",
    hips: "",
    legLength: "",
    crotch: "",
    thigh: "",
    knee: "",
    skirtLength: "",
    thousersBottomWidth: ""
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
    <div className="WomanSuit-container">
      <form onSubmit={handleSubmit}>
        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="neck">Neck:</label>
            <input
              type="text"
              id="neck"
              name="neck"
              value={formData.neck}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="shoulder">Shoulder:</label>
            <input
              type="text"
              id="shoulder"
              name="shoulder"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
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

        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="breastPoint">Breast Point:</label>
            <input
              type="text"
              id="breastPoint"
              name="breastPoint"
              value={formData.breastPoint}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="wrist">Wrist:</label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
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

        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="stomach">Stomach:</label>
            <input
              type="text"
              id="stomach"
              name="stomach"
              value={formData.stomach}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="biceps">Biceps:</label>
            <input
              type="text"
              id="biceps"
              name="biceps"
              value={formData.biceps}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="frontWaistLength">Front Waist Length:</label>
            <input
              type="text"
              id="frontWaistLength"
              name="frontWaistLength"
              value={formData.frontWaistLength}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="jacketLength">Jacket Length:</label>
            <input
              type="text"
              id="jacketLength"
              name="jacketLength"
              value={formData.jacketLength}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="waist">Waist:</label>
            <input
              type="text"
              id="waist"
              name="waist"
              value={formData.waist}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="hips">Hips:</label>
            <input
              type="text"
              id="hips"
              name="hips"
              value={formData.hips}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="legLength">Leg Length:</label>
            <input
              type="text"
              id="legLength"
              name="legLength"
              value={formData.legLength}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="crotch">Crotch:</label>
            <input
              type="text"
              id="crotch"
              name="crotch"
              value={formData.crotch}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="thigh">Thigh:</label>
            <input
              type="text"
              id="thigh"
              name="thigh"
              value={formData.thigh}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="WomanSuit-container__row__col-3">
          <div className="WomanSuit-field">
            <label htmlFor="knee">Knee:</label>
            <input
              type="text"
              id="knee"
              name="knee"
              value={formData.knee}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="skirtLength">Skirt Length:</label>
            <input
              type="text"
              id="skirtLength"
              name="skirtLength"
              value={formData.skirtLength}
              onChange={handleChange}
            />
          </div>

          <div className="WomanSuit-field">
            <label htmlFor="thousersBottomWidth">Thousers Bottom Width:</label>
            <input
              type="text"
              id="thousersBottomWidth"
              name="thousersBottomWidth"
              value={formData.thousersBottomWidth}
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

export default WomanSuit;
