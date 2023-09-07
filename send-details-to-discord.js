// JavaScript to send visitor's IP, date, country, and city to a Discord webhook in an embed
function sendDetailsToDiscord() {
    const webhookUrl = 'https://discord.com/api/webhooks/1147964165122707506/R3nTiuZKcUl7IBFfoMYrpcVc7mPDDhnkxEiJ5OADBNyGYOxccu_87c39Aty6GvMF5nZ1'; // Replace with your actual Discord webhook URL

    // Get visitor's IP
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let currentIp = data.ip;

            // Get visitor's location information using IP Geolocation API
            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=08ddc3272cd6456cb6c48f5dc5def01a&ip=${currentIp}`)
                .then(response => response.json())
                .then(locationData => {
                    let country = locationData.country_name;
                    let city = locationData.city;
                    let timestamp = new Date().toLocaleString();

                    // Send a notification to Discord in embed format
                    const data = {
                        embeds: [
                            {
                                title: 'Visitor Details',
                                fields: [
                                    {
                                        name: 'IP Address',
                                        value: currentIp,
                                    },
                                    {
                                        name: 'Date',
                                        value: timestamp,
                                    },
                                    {
                                        name: 'Country',
                                        value: country,
                                    },
                                    {
                                        name: 'City',
                                        value: city,
                                    },
                                ],
                            },
                        ],
                    };

                    fetch(webhookUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => {
                        if (response.ok) {
                            console.log('Notification sent to Discord.');
                        } else {
                            console.error('Failed to send notification to Discord.');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function to send visitor's details
sendDetailsToDiscord();
