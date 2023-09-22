// TailoringPage.tsx
import React, { useState } from 'react';
import TailoringForm from '../Forms/Tailoring-form';
import Calendar from '../Calendar/Calendar';
import '../../styles/css/styles.css';

const TailoringPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  return (
    <div className="tailoring-page__container">
      <div className="tailoring-page__tabs">
        <button
          className={activeTab === 'form' ? 'active' : ''}
          onClick={() => setActiveTab('form')}
        >
          Formulário de Alfaiataria
        </button>
        <button
          className={activeTab === 'calendar' ? 'active' : ''}
          onClick={() => setActiveTab('calendar')}
        >
          Calendário de Entrega
        </button>
      </div>
      <div className="tailoring-page__tab-content">
        {activeTab === 'form' && <TailoringForm />}
        {activeTab === 'calendar' && <Calendar />}
      </div>
    </div>
  );
};

export default TailoringPage;
