// Fetch services from backend API
fetch('http://localhost:5000/api/services')
    .then(response => response.json())
    .then(data => {
        const serviceList = document.getElementById('service-list');

        data.forEach(service => {
            const serviceDiv = document.createElement('div');
            serviceDiv.classList.add('service');
            serviceDiv.innerHTML = `
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            `;
            serviceList.appendChild(serviceDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
