import React, { useState } from 'react';
import '../../styles/css/styles.css';

const FormOvercoat: React.FC = () => {
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
    <div className='"Tailoring-form"'>
      <form onSubmit={handleSubmit}>
      
        <div>
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
        <div>
          <label htmlFor="overcoatLength">Overcoat Length:</label>
            <input
              type="text"
              id="overcoatLength"
              name="overcoatLength"
              value={formData.overcoatLength}
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
          <label htmlFor="chest"> Chest: </label>
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
          <label htmlFor="stomach"> Stomach: </label>
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
          <label htmlFor="sleeveLength"> Slevee Length: </label>
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
          <label htmlFor="biceps"> Biceps: </label>
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
          <label htmlFor="wrist"> Wrist: </label>
            <input
              type="text"
              id="wrist"
              name="wrist"
              value={formData.wrist}
              onChange={handleChange}
            />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormOvercoat;
