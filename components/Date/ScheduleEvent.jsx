import React from 'react';
import { cilCalendar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
export default function ScheduleEvent() {

  const evento ={
    title: 'Boda M&G',
    day: '22/03/2025',
    description: '¡Ven a celebrar con nosotros!',
    startDate: new Date('2025-03-22T12:00:00'), 
    endDate: new Date('2025-03-22T13:00:00'), 
  }
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  };

  const createGoogleCalendarLink = (event) => {
    const formatDate = (date) => {
      const d = new Date(date);
      return d.toISOString().replace(/-|:|\.\d\d\d/g, "");
    };
  
    const startDate = formatDate(event.startDate);
    const endDate = formatDate(event.endDate);
  
    return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      event.title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      event.description
    )}`;
  };
  
  const googleCalendarLink = createGoogleCalendarLink(evento);

  return (
    <div className="w-[50vw] flex justify-center">
      <button
        className=" w-auto px-2 rounded-3xl lg:rounded-[2.5rem] bg-primary text-white font-semibold shadow-md flex items-center justify-center"
        onClick={() => window.open(googleCalendarLink, '_blank')}
      >
        
        <img className='pr-1 pb-1 sm:pb-2 sm:pr-2 md:pb-2 lg:pb-2 h-[5vh] sm:h-[10vh] md:h-[10vh] lg:h-[10vh] ' src="/agenda.svg" alt="" />
        <span className=' pr-1 lg:pr-2 text-[11px] sm:text-sm md:text-base lg:text-lg'>AGENDAR LA FECHA</span>
      </button>
   </div>

  );
}
