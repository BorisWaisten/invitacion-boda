import React from 'react';

export default function ScheduleEvent() {
  const event = {
    title: "Nuestra Boda",
    location: "Ubicación de la Boda",
    description: "¡Ven a celebrar con nosotros!",
    startDate: new Date("2024-09-15T17:00:00"), // Fecha y hora de inicio del evento
    endDate: new Date("2024-09-15T23:00:00")    // Fecha y hora de finalización del evento
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const createGoogleCalendarLink = (event) => {
    const startDate = formatDate(event.startDate);
    const endDate = formatDate(event.endDate);

    return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  };

  const googleCalendarLink = createGoogleCalendarLink(event);

  return (
    <div className="w-full">
      <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer">
        <button className="py-2 px-4 mt-10 bg-blue-500  text-white font-bold rounded-md hover:bg-blue-600">
          Agendar Evento
        </button>
      </a>
    </div>
  );
}
