// Incident category data (to be dynamically fetched later)
const incidentData = {
    labels: ['Harassment', 'Vandalism', 'Accident', 'Theft', 'Other'],
    counts: [5, 3, 4, 2, 1]
  };
  
  // Chart.js - Bar chart
  const ctx = document.getElementById('incidentChart').getContext('2d');
  const incidentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: incidentData.labels,
      datasets: [{
        label: 'Incidents by Category',
        data: incidentData.counts,
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Incident Categories' }
      }
    }
  });
  
  // Leaflet.js Map Setup - VIT Vellore Location
  const map = L.map('map').setView([12.9716, 79.1636], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  // Sample incidents inside VIT campus
  const incidents = [
    { lat: 12.9720, lng: 79.1628, type: 'Theft near SJT' },
    { lat: 12.9705, lng: 79.1645, type: 'Accident near 11th Gate' },
    { lat: 12.9725, lng: 79.1655, type: 'Harassment near PRP' }
  ];
  
  incidents.forEach(i => {
    L.circleMarker([i.lat, i.lng], {
      radius: 8,
      color: 'red'
    }).bindPopup(`Type: ${i.type}`).addTo(map);
  });
  