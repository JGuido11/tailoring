import React, { useState } from 'react';
import '../../styles/css/styles.css';

interface OvercoatFormProps {
  onSave: (data: any) => void;
}

const FormOvercoat: React.FC<OvercoatFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    height:'',
    weight:'',
    neck: '',
    overcoatLength: '',
    shoulder: '',
    chest: '',
    stomach: '',
    sleeveLength: '',
    biceps: '',
    wrist: '',
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
    <div className="Overcoat-container">
      <form onSubmit={handleSubmit}>
        <div className="Overcoat-container__row__col-3">
          <div className="Overcoat-field">
            <label htmlFor="neck">Neck:</label>
            <input
              type="text"
              id="neck"
              name="neck"
              value={formData.neck}
              onChange={handleChange}
            />
          </div>

          <div className="Overcoat-field">
            <label htmlFor="overcoatLength">Overcoat Length:</label>
            <input
              type="text"
              id="overcoatLength"
              name="overcoatLength"
              value={formData.overcoatLength}
              onChange={handleChange}
            />
          </div>

          <div className="Overcoat-field">
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

        <div className="Overcoat-container__row__col-3">
          <div className="Overcoat-field">
            <label htmlFor="chest">Chest:</label>
            <input
              type="text"
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
            />
          </div>

          <div className="Overcoat-field">
            <label htmlFor="stomach">Stomach:</label>
            <input
              type="text"
              id="stomach"
              name="stomach"
              value={formData.stomach}
              onChange={handleChange}
            />
          </div>

          <div className="Overcoat-field">
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

        <div className="Overcoat-container__row__col-3">
          <div className="Overcoat-field">
            <label htmlFor="biceps">Biceps:</label>
            <input
              type="text"
              id="biceps"
              name="biceps"
              value={formData.biceps}
              onChange={handleChange}
            />
          </div>

          <div className="Overcoat-field">
            <label htmlFor="wrist">Wrist:</label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
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

export default FormOvercoat;

