// DeliveryCalendar.tsx
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/css/styles.css';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="Calendar">
      <h2>Calendário de Entrega de Pedidos</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecione a data de entrega"
      />
      <button type="submit">
        submit
      </button>
    </div>
  );
};

export default Calendar;
