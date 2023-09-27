import React, { useState } from 'react';
import '../../styles/css/styles.css';

const FormWoman: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    chest: '',
    waist: '',
    hips: '',
    sleeveLength: '',
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
          <h2>Formulário de Alfaiataria</h2>
            <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
        </div>

        <div>
          <label htmlFor="chest">Medida do Peito:</label>
            <input
              type="text"
              id="chest"
              name="chest"
              value={formData.chest}
              onChange={handleChange}
            />
        </div>

        <div>
          <label htmlFor="waist">Medida da Cintura:</label>
            <input
              type="text"
              id="waist"
              name="waist"
              value={formData.waist}
              onChange={handleChange}
            />
        </div>

        <div>
          <label htmlFor="hips">Medida dos Quadris:</label>
            <input
              type="text"
              id="hips"
              name="hips"
              value={formData.hips}
              onChange={handleChange}
            />
        </div>
          
        <div>
          <label htmlFor="sleeveLength">Comprimento da Manga:</label>
            <input
              type="text"
              id="sleeveLength"
              name="sleeveLength"
              value={formData.sleeveLength}
              onChange={handleChange}
            />
        </div>


        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormWoman;
