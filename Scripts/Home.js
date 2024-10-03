
        // Get the canvas element
        const ctx = document.getElementById('myChart').getContext('2d');
         
        // Create a gradient background for the line chart
        const gradient = ctx.createLinearGradient(0, 0, 0, 270);
        gradient.addColorStop(0, 'rgba(75, 192, 192, 0.4)'); // Top color (lighter)
        gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); // Bottom color (transparent)
        
        // Sample data
        const labels = ['January', 'February', 'March', 'April', 'May'];
        const data = {
            labels: labels,
            datasets: [{
                fill: true, // Enable filling the area under the line
                backgroundColor: gradient,
                borderColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.05, // Optional: Add some curve to the line
                data: [10, 25, 30, 15, 20],
            }]
        };

        // Configuring the chart
        const config = {
            type: 'line', // You can also use 'bar', 'pie', etc.
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, // Hide the legend
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines
                            borderDash: [10, 5], // Dotted grid lines for x-axis
                            lineWidth: 1, // Set the width of the grid lines
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines
                            borderDash: [10, 5], // Dotted grid lines for y-axis
                            lineWidth: 1, // Set the width of the grid lines
                        },
                        beginAtZero: true
                    }
                }
            }
        };

        // Render the chart inside the canvas
        const mychart = new Chart(ctx, config);