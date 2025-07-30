// Theme Toggle
const toggleTheme = () => {
  const root = document.documentElement;
  root.classList.toggle('dark-theme');
  localStorage.setItem('theme', root.classList.contains('dark-theme') ? 'dark' : 'light');
};

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

// Simulated API Call
async function fetchUserData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("Fetched Users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Form Validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('error');
        valid = false;
      } else {
        input.classList.remove('error');
      }
    });

    if (valid) {
      alert('Form submitted!');
    }
  });
}

// Chart.js Example
function drawChart(ctxId) {
  const ctx = document.getElementById(ctxId);
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [{
        label: 'Sample Dataset',
        data: [12, 19, 3, 5],
        backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
}

// Event Binding
document.addEventListener('DOMContentLoaded', () => {
  fetchUserData();
  validateForm('contactForm');
  drawChart('sampleChart');
});
