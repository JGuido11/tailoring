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
            <label htmlFor="Height">Height:</label>
              <input
                type="text"
                id="Height"
                name="Height"
                value={formData.Height}
                onChange={handleChange}
              />
        </div>
        <br />
        <div>
            <label htmlFor="Weight">Weight:</label>
              <input
                type="text"
                id="Weight"
                name="Weight"
                value={formData.Weight}
                onChange={handleChange}
              />
        </div>
        <br />
        <div>
          <label htmlFor="chest">Chest size:</label>
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
          <label htmlFor="Stomach">Stomach:</label>
            <input
              type="text"
              id="Stomach"
              name="Stomach"
              value={formData.Stomach}
              onChange={handleChange}
            />
        </div>
        <br />
        <div>
          <label htmlFor="FrontVestLength">Front Vest Length:</label>
            <input
              type="text"
              id="FrontVestLength"
              name="FrontVestLength"
              value={formData.FrontVestLength}
              onChange={handleChange}
            />
        </div>
        <br />
        <div>
          <label htmlFor="BackVestLength">Back Vest Length:</label>
            <input
              type="text"
              id="BackVestLength"
              name="BackVestLength"
              value={formData.BackVestLength}
              onChange={handleChange}
            />
        </div>
        <br />
        <div>
            <textarea name="name" id="name" placeholder='Other Special Requirements' rows={3} cols={35}/>
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormVest;
