$(document).ready(function() {

    $('.calendar').fullCalendar({
      locale: 'vi-vn',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,week,day'
      },
      defaultDate: '2024-01-10',
      navLinks: true, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Bốc thăm vòng loại',
          start: '2024-01-19'
        },
        {
          title: 'Quyết định thể thức vòng loại',
          start: '2024-01-18',
          end: '2024-01-20',
        },
        {
          id: 2,
          title: 'null',
          start: '2024-01-22',
          color: 'red',
        },
        {
          id: 1,
          title: 'Vòng loại',
          start: '2024-1-23',
          end: '2024-1-31'
        },
        
        {
          id: 3,
          title: 'Trận 2(23:00): Team C vs Team D',
          start: '2024-01-22',
        },
        {
          title: 'Meeting',
          start: '2018-03-12T10:30:00',
          end: '2018-03-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-03-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-03-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-03-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-03-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-03-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-03-28'
        }
      ]
    });

  });