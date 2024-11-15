const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

// Route to accept amount through URL and display it
app.get('/', (req, res) => {
    const amount = req.query.amount || 0; // Default to 0 if no amount is passed
    res.send(`
        <html>
        <head><title>Payment Amount</title></head>
        <body style="display: flex; align-items: center; justify-content: center; height: 100vh;">
            <h1>The Amount to Pay is: $${amount}</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
