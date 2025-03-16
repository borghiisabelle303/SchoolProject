// Create a new Node.js HTTP server
const http = require('http');

// Define the port number to listen on
const port = 3000;

// Create a new instance of the HTTP server class
const server = http.createServer((req, res) => {
    // Handle GET requests to the root URL
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello from Node.js!</h1>');
    }
});

// Listen for incoming requests on the defined port number
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
