document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      themeSystem: 'standard',
      events: [
        {
          title: 'Harassment Reported',
          start: '2025-04-01'
        },
        {
          title: 'Accident at Block A',
          start: '2025-04-03'
        },
        {
          title: 'Vandalism near Library',
          start: '2025-04-07'
        },
        {
          title: 'Theft at Hostel',
          start: '2025-04-09'
        }
      ]
    });
  
    calendar.render();
  });
  