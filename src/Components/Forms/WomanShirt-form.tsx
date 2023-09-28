import React, { useState } from 'react';
import '../../styles/css/styles.css';

const WomanShirt: React.FC = () => {
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
    waist: ""
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
    <div className="WomanShirt-container">
      <form onSubmit={handleSubmit}>
        <div className="WomanShirt-container__row__col-3">
          <div className="WomanShirt-field">
            <label htmlFor="neck">Neck:</label>
            <input
              type="text"
              id="neck"
              name="neck"
              value={formData.neck}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
            <label htmlFor="shoulder">Shoulder:</label>
            <input
              type="text"
              id="shoulder"
              name="shoulder"
              value={formData.shoulder}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
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

        <div className="WomanShirt-container__row__col-3">
          <div className="WomanShirt-field">
            <label htmlFor="breastPoint">Breast Point:</label>
            <input
              type="text"
              id="breastPoint"
              name="breastPoint"
              value={formData.breastPoint}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
            <label htmlFor="wrist">Wrist:</label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
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

        <div className="WomanShirt-container__row__col-3">
          <div className="WomanShirt-field">
            <label htmlFor="stomach">Stomach:</label>
            <input
              type="text"
              id="stomach"
              name="stomach"
              value={formData.stomach}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
            <label htmlFor="biceps">Biceps:</label>
            <input
              type="text"
              id="biceps"
              name="biceps"
              value={formData.biceps}
              onChange={handleChange}
            />
          </div>

          <div className="WomanShirt-field">
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

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WomanShirt;

