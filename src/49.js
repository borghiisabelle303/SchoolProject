let express = require('express');
let app = express();

app.get('/', (req, res) => {
  let message = "Hello, World!";
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
