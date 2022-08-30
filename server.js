const app = require('./src/app');
const http = require('http');
//simple Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Welspun application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
}); 