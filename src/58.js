let express = require('express');
let app = express();

app.use(express.json());

// Example route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
