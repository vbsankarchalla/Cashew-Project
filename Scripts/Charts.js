
        // Get the canvas element
        const ctx_LineChart = document.getElementById('LineChart').getContext('2d');
        const ctx_donut = document.getElementById('Doughnut').getContext('2d');
        const Acc_donut = document.getElementById('Acc-Doughnut').getContext('2d');
         
        // Create a gradient background for the line chart
        const gradient = ctx_LineChart.createLinearGradient(0, 0, 0, 270);
        gradient.addColorStop(0, 'rgba(75, 192, 192, 0.4)'); // Top color (lighter)
        gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); // Bottom color (transparent)
        
        // Sample data
        const labels = ['January', 'February', 'March', 'April', 'May'];
        const data = {
            labels: labels,
            datasets: [{
                fill: true, // Enable filling the area under the line
                backgroundColor: gradient,
                borderColor: 'rgba(160, 218, 238, 0.5)',
                tension: 0.05, // Optional: Add some curve to the line
                data: [10, 25, 30, 15, 20],
            }]
        };

        // Configuring the chart
        const lineConfig = {
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
                const chart = new Chart(ctx_LineChart, lineConfig);


         // Define the chart with data and configurations
        const donut = new Chart(ctx_donut, {
            type: 'doughnut', // Chart type
            data: {
            // labels: ['Red', 'Blue', 'Yellow'], // Labels for the pie slices
            datasets: [{
                label:['Product A', 'Product B', 'Product C'], // Optional label for the dataset
                data: [300, 140, 100], // Data for each pie slice
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  // Red with opacity
                    'rgba(54, 162, 235, 0.6)',  // Blue with opacity
                    'rgba(255, 206, 86, 0.6)'   // Yellow with opacity
                  ], // Background colors for slices
                borderColor: [
                'rgba(255, 99, 132, 1)',    // Solid red border
                'rgba(54, 162, 235, 1)',    // Solid blue border
                'rgba(255, 206, 86, 1)'     // Solid yellow border
                ],
                borderWidth: 2, // Border thickness
                hoverOffset: 15 // Offset when hovering
            }]
            },
            options: {
                responsive: true, // Ensures chart adjusts based on screen size
                cutout: '35%', // Turns it into a doughnut chart with a 50% cutout
                plugins: {
                    legend: {
                    position: 'left', // Position of the legend
                    },
                    tooltip:{
                        enabled:true
                    }
                }
            }
        });

          // Define the chart with data and configurations
          const Accdonut = new Chart(Acc_donut, {
            type: 'doughnut', // Chart type
            data: {
            // labels: ['Red', 'Blue', 'Yellow'], // Labels for the pie slices
            datasets: [{
                label:['Product A', 'Product B', 'Product C'], // Optional label for the dataset
                data: [300, 140, 100], // Data for each pie slice
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  // Red with opacity
                    'rgba(54, 162, 235, 0.6)',  // Blue with opacity
                    'rgba(255, 206, 86, 0.6)'   // Yellow with opacity
                  ], // Background colors for slices
                borderColor: [
                'rgba(255, 99, 132, 1)',    // Solid red border
                'rgba(54, 162, 235, 1)',    // Solid blue border
                'rgba(255, 206, 86, 1)'     // Solid yellow border
                ],
                borderWidth: 2, // Border thickness
                hoverOffset: 10 // Offset when hovering
            }]
            },
            options: {
                borderWidth: 10,
                borderRadius:2,
                hoverBorderWidath:0,
                responsive: true, // Ensures chart adjusts based on screen size
                cutout: '35%', // Turns it into a doughnut chart with a 50% cutout
                plugins: {
                    legend: {
                    position: 'left', // Position of the legend
                    },
                    tooltip:{
                        enabled:true
                    }
                }
            }
        });

