document.addEventListener("DOMContentLoaded", function () {
    const hostelChart = new Chart(document.getElementById("hostelChart"), {
      type: 'bar',
      data: {
        labels: ['A Block', 'B Block', 'C Block', 'D Block', 'E Block'],
        datasets: [{
          label: 'Incidents',
          data: [12, 19, 8, 15, 10],
          backgroundColor: '#ff4444'
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: 'white' }
          }
        }
      }
    });
  
    const resolutionTimeChart = new Chart(document.getElementById("resolutionTimeChart"), {
      type: 'bar',
      data: {
        labels: ['Harassment', 'Theft', 'Vandalism', 'Accident'],
        datasets: [{
          label: 'Avg Resolution Time (hrs)',
          data: [24, 36, 18, 20],
          backgroundColor: '#ff4444'
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: 'white' }
          }
        }
      }
    });
  
    const responseTimeChart = new Chart(document.getElementById("responseTimeChart"), {
      type: 'line',
      data: {
        labels: ['April 1', 'April 3', 'April 5', 'April 7', 'April 9'],
        datasets: [{
          label: 'Avg Response Time (hrs)',
          data: [3, 2.5, 4, 3.2, 2],
          fill: false,
          borderColor: '#ff4444',
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: 'white' } }
        },
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: 'white' }
          }
        }
      }
    });
  });
  