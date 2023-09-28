import React, { useState } from 'react';
import '../../styles/css/styles.css';

const FormVest: React.FC = () => {
  const [formData, setFormData] = useState({
    Height: '',
    Weight: '',
    chest: '',
    Stomach: '',
    FrontVestLength: '',
    BackVestLength: '',
    SpecialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar aqui a lógica para enviar os dados para o servidor ou realizar outras ações.
    console.log(formData);
  };

  return (
    <div className="Vest-container">
      <form onSubmit={handleSubmit}>
        <div className="Vest-container__row__col-3">
          <div className="Vest-field">
            <label htmlFor="Height">Height:</label>
            <input
              type="text"
              id="Height"
              name="Height"
              value={formData.Height}
              onChange={handleChange}
            />
          </div>

          <div className="Vest-field">
            <label htmlFor="Weight">Weight:</label>
            <input
              type="text"
              id="Weight"
              name="Weight"
              value={formData.Weight}
              onChange={handleChange}
            />
          </div>

          <div className="Vest-field">
            <label htmlFor="chest">Chest size:</label>
            <input
              type="text"
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="Vest-container__row__col-3">
          <div className="Vest-field">
            <label htmlFor="Stomach">Stomach:</label>
            <input
              type="text"
              id="Stomach"
              name="Stomach"
              value={formData.Stomach}
              onChange={handleChange}
            />
          </div>

          <div className="Vest-field">
            <label htmlFor="FrontVestLength">Front Vest Length:</label>
            <input
              type="text"
              id="FrontVestLength"
              name="FrontVestLength"
              value={formData.FrontVestLength}
              onChange={handleChange}
            />
          </div>

          <div className="Vest-field">
            <label htmlFor="BackVestLength">Back Vest Length:</label>
            <input
              type="text"
              id="BackVestLength"
              name="BackVestLength"
              value={formData.BackVestLength}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="SpecialRequirements">Other Special Requirements:</label>
          <textarea
            name="SpecialRequirements"
            id="SpecialRequirements"
            placeholder="Other Special Requirements"
            rows={3}
            cols={35}
            value={formData.SpecialRequirements}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormVest;

